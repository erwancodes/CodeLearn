import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getModule } from "../data/modules";
import { getLesson } from "../data/lessons";
import { useProgress } from "../store/useProgress";
import LessonCard from "../components/LessonCard";
import ProgressBar from "../components/ProgressBar";

export default function Module() {
  const { moduleId = "" } = useParams();
  const mod = getModule(moduleId);
  const unlocked = useProgress((s) => s.isModuleUnlocked(moduleId));
  const ratio = useProgress((s) => s.moduleCompletionRatio(moduleId));
  const completed = useProgress((s) => s.isModuleCompleted(moduleId));

  if (!mod) return <Navigate to="/dashboard" replace />;
  if (!unlocked) return <Navigate to="/dashboard" replace />;

  const lessons = mod.lessonIds
    .map((id) => getLesson(id))
    .filter((l): l is NonNullable<typeof l> => !!l);

  const doneCount = Math.round(ratio * mod.lessonIds.length);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {mod.special ? "★ Module spécial" : `Module ${mod.order}`}
        </span>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{mod.title}</h1>
          {completed && (
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          )}
        </div>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {mod.description}
        </p>

        <div className="mt-4">
          <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-500">
            <span>Progression du module</span>
            <span>
              {doneCount}/{mod.lessonIds.length} leçons
            </span>
          </div>
          <ProgressBar ratio={ratio} />
        </div>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </main>
  );
}
