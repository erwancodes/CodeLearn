import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Progress, Settings } from "../types";
import { MODULES, getModule, getPreviousModule } from "../data/modules";
import { getLesson } from "../data/lessons";

const PROGRESS_KEY = "codelearn_progress";
const SETTINGS_KEY = "codelearn_settings";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00").getTime();
  const db = new Date(b + "T00:00:00").getTime();
  return Math.round((db - da) / 86_400_000);
}

const initialProgress: Progress = {
  modules: {},
  totalXP: 0,
  streak: 0,
  lastActiveDate: "",
};

const initialSettings: Settings = {
  username: "",
  theme: "light",
};

type State = {
  progress: Progress;
  settings: Settings;

  // --- settings ---
  setUsername: (name: string) => void;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;

  // --- progression ---
  completeLesson: (
    moduleId: string,
    lessonId: string,
    score: number,
    xp: number,
  ) => { xpGained: number };
  resetAll: () => void;

  // --- panneau dev / triche ---
  devAddXP: (amount: number) => void;
  devSetXP: (amount: number) => void;
  devSetStreak: (n: number) => void;
  devCompleteModule: (moduleId: string) => void;
  devCompleteAll: () => void;

  // --- sélecteurs dérivés ---
  isModuleUnlocked: (moduleId: string) => boolean;
  isModuleCompleted: (moduleId: string) => boolean;
  moduleCompletionRatio: (moduleId: string) => number;
  isLessonUnlocked: (moduleId: string, lessonId: string) => boolean;
  isLessonCompleted: (moduleId: string, lessonId: string) => boolean;
  lessonScore: (moduleId: string, lessonId: string) => number | null;
};

// Recalcule le flag "completed" d'un module à partir de ses leçons.
function recomputeModuleCompletion(progress: Progress): Progress {
  const modules = { ...progress.modules };
  for (const mod of MODULES) {
    const mp = modules[mod.id];
    if (!mp) continue;
    const allDone = mod.lessonIds.every((lid) => mp.lessons[lid]?.completed);
    modules[mod.id] = { ...mp, completed: allDone };
  }
  return { ...progress, modules };
}

// Marque toutes les leçons d'un module comme complétées (utilisé par le panneau dev).
function completeModulePure(progress: Progress, moduleId: string): Progress {
  const mod = getModule(moduleId);
  if (!mod) return progress;
  const mp = progress.modules[moduleId] ?? { completed: false, lessons: {} };
  const lessons = { ...mp.lessons };
  let xpAdd = 0;
  for (const lid of mod.lessonIds) {
    if (!lessons[lid]?.completed) {
      const l = getLesson(lid);
      xpAdd += l?.xp ?? 0;
      lessons[lid] = {
        completed: true,
        score: 100,
        attempts: (lessons[lid]?.attempts ?? 0) + 1,
        completedAt: lessons[lid]?.completedAt ?? new Date().toISOString(),
      };
    }
  }
  const next: Progress = {
    ...progress,
    modules: { ...progress.modules, [moduleId]: { ...mp, lessons } },
    totalXP: progress.totalXP + xpAdd,
  };
  return recomputeModuleCompletion(next);
}

export const useProgress = create<State>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      settings: initialSettings,

      setUsername: (name) =>
        set((s) => ({ settings: { ...s.settings, username: name.trim() } })),

      setTheme: (theme) =>
        set((s) => ({ settings: { ...s.settings, theme } })),

      toggleTheme: () =>
        set((s) => ({
          settings: {
            ...s.settings,
            theme: s.settings.theme === "light" ? "dark" : "light",
          },
        })),

      completeLesson: (moduleId, lessonId, score, xp) => {
        const state = get();
        const prev = state.progress;
        const moduleProg = prev.modules[moduleId] ?? {
          completed: false,
          lessons: {},
        };
        const existing = moduleProg.lessons[lessonId];

        // XP gagnée uniquement à la première complétion (pas de farming).
        const firstTime = !existing?.completed;
        const xpGained = firstTime ? xp : 0;

        const today = todayISO();

        // Calcul du streak.
        let streak = prev.streak;
        if (prev.lastActiveDate !== today) {
          if (prev.lastActiveDate === "") {
            streak = 1;
          } else {
            const gap = daysBetween(prev.lastActiveDate, today);
            streak = gap === 1 ? prev.streak + 1 : 1;
          }
        } else if (streak === 0) {
          streak = 1;
        }

        const updatedLesson = {
          completed: true,
          score: Math.max(score, existing?.score ?? 0),
          attempts: (existing?.attempts ?? 0) + 1,
          completedAt: existing?.completedAt ?? new Date().toISOString(),
        };

        let next: Progress = {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: {
              ...moduleProg,
              lessons: { ...moduleProg.lessons, [lessonId]: updatedLesson },
            },
          },
          totalXP: prev.totalXP + xpGained,
          streak,
          lastActiveDate: today,
        };

        next = recomputeModuleCompletion(next);
        set({ progress: next });
        return { xpGained };
      },

      resetAll: () =>
        set({ progress: initialProgress }),

      // --- panneau dev / triche ---
      devAddXP: (amount) =>
        set((s) => ({
          progress: {
            ...s.progress,
            totalXP: Math.max(0, s.progress.totalXP + amount),
          },
        })),

      devSetXP: (amount) =>
        set((s) => ({
          progress: { ...s.progress, totalXP: Math.max(0, Math.round(amount)) },
        })),

      devSetStreak: (n) =>
        set((s) => ({
          progress: {
            ...s.progress,
            streak: Math.max(0, Math.round(n)),
            lastActiveDate: s.progress.lastActiveDate || todayISO(),
          },
        })),

      devCompleteModule: (moduleId) =>
        set((s) => ({ progress: completeModulePure(s.progress, moduleId) })),

      devCompleteAll: () =>
        set((s) => {
          let p = s.progress;
          for (const m of MODULES) p = completeModulePure(p, m.id);
          return { progress: p };
        }),

      isModuleUnlocked: (moduleId) => {
        const mod = getModule(moduleId);
        if (mod?.special) return true; // module bonus toujours ouvert
        const previous = getPreviousModule(moduleId);
        if (!previous) return true; // premier module toujours ouvert
        return !!get().progress.modules[previous.id]?.completed;
      },

      isModuleCompleted: (moduleId) =>
        !!get().progress.modules[moduleId]?.completed,

      moduleCompletionRatio: (moduleId) => {
        const mod = getModule(moduleId);
        if (!mod || mod.lessonIds.length === 0) return 0;
        const mp = get().progress.modules[moduleId];
        if (!mp) return 0;
        const done = mod.lessonIds.filter((lid) => mp.lessons[lid]?.completed)
          .length;
        return done / mod.lessonIds.length;
      },

      isLessonUnlocked: (moduleId, lessonId) => {
        if (!get().isModuleUnlocked(moduleId)) return false;
        const mod = getModule(moduleId);
        if (!mod) return false;
        const idx = mod.lessonIds.indexOf(lessonId);
        if (idx <= 0) return true; // première leçon du module
        const prevLessonId = mod.lessonIds[idx - 1];
        return !!get().progress.modules[moduleId]?.lessons[prevLessonId]
          ?.completed;
      },

      isLessonCompleted: (moduleId, lessonId) =>
        !!get().progress.modules[moduleId]?.lessons[lessonId]?.completed,

      lessonScore: (moduleId, lessonId) => {
        const lp = get().progress.modules[moduleId]?.lessons[lessonId];
        return lp?.completed ? lp.score : null;
      },
    }),
    {
      name: PROGRESS_KEY,
      // On persiste progress et settings sous des clés distinctes (cf. PRD).
      // Zustand n'écrit qu'une clé : on duplique settings dans une 2e clé pour
      // respecter le contrat "codelearn_settings".
      partialize: (s) => ({ progress: s.progress, settings: s.settings }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          try {
            localStorage.setItem(
              SETTINGS_KEY,
              JSON.stringify(state.settings),
            );
          } catch {
            /* noop */
          }
        }
      },
    },
  ),
);

// Synchronise la clé "codelearn_settings" à chaque changement de settings,
// pour respecter le schéma localStorage décrit dans le PRD.
useProgress.subscribe((state) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  } catch {
    /* noop */
  }
});

// Sélecteur pratique : la leçon est-elle débloquée + ses métadonnées.
export function useLessonMeta(moduleId: string, lessonId: string) {
  const unlocked = useProgress((s) => s.isLessonUnlocked(moduleId, lessonId));
  const completed = useProgress((s) => s.isLessonCompleted(moduleId, lessonId));
  const score = useProgress((s) => s.lessonScore(moduleId, lessonId));
  const lesson = getLesson(lessonId);
  return { unlocked, completed, score, lesson };
}
