import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Lock,
  Circle,
  Code2,
  ChevronRight,
  Globe,
} from "lucide-react";
import type { Lesson } from "../types";
import { useProgress } from "../store/useProgress";
import { isProjectLesson, isBuilderLesson } from "../data/lessons";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  const unlocked = useProgress((s) =>
    s.isLessonUnlocked(lesson.moduleId, lesson.id),
  );
  const completed = useProgress((s) =>
    s.isLessonCompleted(lesson.moduleId, lesson.id),
  );
  const lp = useProgress(
    (s) => s.progress.modules[lesson.moduleId]?.lessons[lesson.id],
  );
  const isProject = isProjectLesson(lesson);
  const isBuilder = isBuilderLesson(lesson);

  const to = isBuilder
    ? `/builder/${lesson.moduleId}/${lesson.id}`
    : isProject
      ? `/exercise/${lesson.moduleId}/${lesson.id}`
      : `/lesson/${lesson.moduleId}/${lesson.id}`;

  const statusIcon = !unlocked ? (
    <Lock className="h-5 w-5 text-slate-400" />
  ) : completed ? (
    <CheckCircle2 className="h-5 w-5 text-green-600" />
  ) : (
    <Circle className="h-5 w-5 text-brand-500" />
  );

  const content = (
    <div
      className={`card flex items-center gap-4 p-4 ${
        unlocked ? "hover:shadow-md" : "opacity-60"
      }`}
    >
      <div className="shrink-0">{statusIcon}</div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold">{lesson.title}</h3>
          {isBuilder ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-0.5 text-xs font-semibold text-pink-700 dark:bg-pink-500/10 dark:text-pink-300">
              <Globe className="h-3 w-3" /> Site
            </span>
          ) : (
            isProject && (
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                <Code2 className="h-3 w-3" /> Projet
              </span>
            )
          )}
        </div>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          {lesson.xp} XP
          {completed && lp && (
            <>
              {" · "}
              {isProject || isBuilder ? "Terminé" : `Score ${lp.score}%`}
              {lp.completedAt && ` · ${formatDate(lp.completedAt)}`}
            </>
          )}
        </p>
      </div>

      {unlocked ? (
        <span className="shrink-0 text-sm font-semibold text-brand-600 dark:text-brand-400">
          {completed ? (
            "Revoir"
          ) : (
            <span className="inline-flex items-center">
              {lp ? "Reprendre" : "Commencer"}
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </span>
      ) : (
        <span className="shrink-0 text-sm text-slate-400">Verrouillée</span>
      )}
    </div>
  );

  if (!unlocked) return <div className="cursor-not-allowed">{content}</div>;
  return (
    <Link to={to} className="block">
      {content}
    </Link>
  );
}
