import { Link } from "react-router-dom";
import { CheckCircle2, Lock, BookOpen } from "lucide-react";
import type { ModuleDef } from "../types";
import { useProgress } from "../store/useProgress";
import ProgressBar from "./ProgressBar";

export default function ModuleCard({ module }: { module: ModuleDef }) {
  const unlocked = useProgress((s) => s.isModuleUnlocked(module.id));
  const completed = useProgress((s) => s.isModuleCompleted(module.id));
  const ratio = useProgress((s) => s.moduleCompletionRatio(module.id));
  const doneCount = Math.round(ratio * module.lessonIds.length);

  const inner = (
    <div
      className={`card flex h-full flex-col p-5 ${
        unlocked ? "hover:-translate-y-0.5 hover:shadow-md" : "opacity-70"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
          {!unlocked ? (
            <Lock className="h-5 w-5" />
          ) : completed ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <BookOpen className="h-5 w-5" />
          )}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Module {module.order}
        </span>
      </div>

      <h3 className="text-lg font-bold">{module.title}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500 dark:text-slate-400">
        {module.description}
      </p>

      <div className="mt-4">
        {!unlocked ? (
          <p className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
            <Lock className="h-4 w-4" /> Termine le module précédent
          </p>
        ) : completed ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" /> Terminé
          </span>
        ) : (
          <>
            <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-500">
              <span>Progression</span>
              <span>
                {doneCount}/{module.lessonIds.length}
              </span>
            </div>
            <ProgressBar ratio={ratio} />
          </>
        )}
      </div>
    </div>
  );

  if (!unlocked) return <div className="cursor-not-allowed">{inner}</div>;
  return (
    <Link to={`/module/${module.id}`} className="block">
      {inner}
    </Link>
  );
}
