import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { getModule, getPreviousModule } from "../data/modules";
import { getLesson } from "../data/lessons";
import { useProgress } from "../store/useProgress";
import LessonCard from "../components/LessonCard";
import ProgressBar from "../components/ProgressBar";
import NotFound from "./NotFound";

export default function Module() {
  const { moduleId = "" } = useParams();
  const mod = getModule(moduleId);
  const unlocked = useProgress((s) => s.isModuleUnlocked(moduleId));
  const ratio = useProgress((s) => s.moduleCompletionRatio(moduleId));
  const completed = useProgress((s) => s.isModuleCompleted(moduleId));

  // Module inexistant → page 404.
  if (!mod) return <NotFound />;

  // Module verrouillé → message d'accès refusé (pas de redirection silencieuse).
  if (!unlocked) {
    const previous = getPreviousModule(moduleId);
    return (
      <main className="mx-auto max-w-lg px-4 py-12">
        <Link
          to="/dashboard"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au tableau de bord
        </Link>

        <div className="card p-8 text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
            <Lock className="h-8 w-8" />
          </span>
          <h1 className="text-2xl font-bold">Module verrouillé 🔒</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Tu n'as pas encore accès au module «&nbsp;{mod.title}&nbsp;».
            {previous
              ? ` Termine d'abord le module « ${previous.title} » à 100 % pour le débloquer.`
              : ""}
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            {previous && (
              <Link to={`/module/${previous.id}`} className="btn-primary">
                Aller au module « {previous.title} »
              </Link>
            )}
            <Link to="/dashboard" className="btn-ghost">
              Voir tous les modules
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
