import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Flame,
  Sparkles,
  Trophy,
  Wand2,
  Zap,
  RotateCcw,
  CheckCircle2,
  Unlock,
} from "lucide-react";
import { useProgress } from "../store/useProgress";
import { MODULES } from "../data/modules";
import { getLevel } from "../utils/levels";

export default function DevPanel() {
  const totalXP = useProgress((s) => s.progress.totalXP);
  const streak = useProgress((s) => s.progress.streak);
  const modulesProg = useProgress((s) => s.progress.modules);

  const devAddXP = useProgress((s) => s.devAddXP);
  const devSetXP = useProgress((s) => s.devSetXP);
  const devSetStreak = useProgress((s) => s.devSetStreak);
  const devCompleteModule = useProgress((s) => s.devCompleteModule);
  const devCompleteAll = useProgress((s) => s.devCompleteAll);
  const resetAll = useProgress((s) => s.resetAll);

  const [xpInput, setXpInput] = useState("100");
  const [streakInput, setStreakInput] = useState("7");

  const level = getLevel(totalXP);

  const unlockUpToModule4 = () => {
    // Compléter les modules 1 à 3 pour débloquer le module 4.
    ["module-1", "module-2", "module-3"].forEach((id) => devCompleteModule(id));
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-2 flex items-center gap-2">
        <Wand2 className="h-7 w-7 text-fuchsia-500" />
        <h1 className="text-3xl font-bold">Panneau dev</h1>
      </div>
      <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
        ⚠️ Mode triche local : tout est stocké dans le navigateur (localStorage).
        Pratique pour tester les modules sans tout refaire à la main.
      </p>

      {/* État actuel */}
      <div className="card mb-5 grid grid-cols-3 gap-3 p-5 text-center">
        <div>
          <Trophy className="mx-auto mb-1 h-5 w-5 text-amber-500" />
          <p className="text-lg font-bold">{level.name}</p>
          <p className="text-xs text-slate-500">niveau</p>
        </div>
        <div>
          <Sparkles className="mx-auto mb-1 h-5 w-5 text-brand-500" />
          <p className="text-lg font-bold">{totalXP}</p>
          <p className="text-xs text-slate-500">XP total</p>
        </div>
        <div>
          <Flame className="mx-auto mb-1 h-5 w-5 text-orange-500" />
          <p className="text-lg font-bold">{streak}</p>
          <p className="text-xs text-slate-500">streak (j)</p>
        </div>
      </div>

      {/* XP rapide */}
      <section className="card mb-5 p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold">
          <Zap className="h-5 w-5 text-fuchsia-500" />
          Gagner de l'XP
        </h2>
        <div className="mb-3 flex flex-wrap gap-2">
          {[50, 100, 500, 1000].map((amt) => (
            <button
              key={amt}
              onClick={() => devAddXP(amt)}
              className="btn-primary !py-2"
            >
              +{amt} XP
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            value={xpInput}
            onChange={(e) => setXpInput(e.target.value)}
            className="w-32 rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <button
            onClick={() => devAddXP(Number(xpInput) || 0)}
            className="btn-ghost"
          >
            Ajouter
          </button>
          <button
            onClick={() => devSetXP(Number(xpInput) || 0)}
            className="btn-ghost"
          >
            Définir à
          </button>
        </div>
      </section>

      {/* Streak */}
      <section className="card mb-5 p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold">
          <Flame className="h-5 w-5 text-orange-500" />
          Définir le streak
        </h2>
        <div className="flex gap-2">
          <input
            type="number"
            value={streakInput}
            onChange={(e) => setStreakInput(e.target.value)}
            className="w-32 rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <button
            onClick={() => devSetStreak(Number(streakInput) || 0)}
            className="btn-ghost"
          >
            Appliquer
          </button>
        </div>
      </section>

      {/* Modules */}
      <section className="card mb-5 p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold">
          <Unlock className="h-5 w-5 text-fuchsia-500" />
          Débloquer / compléter
        </h2>

        <div className="mb-4 flex flex-wrap gap-2">
          <button onClick={unlockUpToModule4} className="btn-primary !py-2">
            <Unlock className="h-4 w-4" />
            Débloquer le module 4
          </button>
          <button onClick={devCompleteAll} className="btn-primary !py-2">
            <CheckCircle2 className="h-4 w-4" />
            Tout compléter
          </button>
        </div>

        <div className="space-y-2">
          {MODULES.map((m) => {
            const done = modulesProg[m.id]?.completed;
            return (
              <div
                key={m.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 dark:border-slate-800"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {done && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  {m.title}
                </span>
                <button
                  onClick={() => devCompleteModule(m.id)}
                  className="btn-ghost !py-1.5 !text-xs"
                >
                  Compléter
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reset */}
      <section className="card border-red-200 p-5 dark:border-red-500/20">
        <h2 className="mb-2 flex items-center gap-2 font-bold text-red-600">
          <RotateCcw className="h-5 w-5" />
          Tout remettre à zéro
        </h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          Efface toute la progression, l'XP et le streak (le prénom est conservé).
        </p>
        <button
          onClick={() => {
            if (confirm("Réinitialiser toute la progression ?")) resetAll();
          }}
          className="btn bg-red-600 text-white hover:bg-red-700"
        >
          Réinitialiser la progression
        </button>
      </section>
    </main>
  );
}
