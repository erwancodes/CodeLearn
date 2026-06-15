import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Sparkles,
  Target,
} from "lucide-react";
import { getModule } from "../data/modules";
import { getLesson } from "../data/lessons";
import { getExercise } from "../data/exercises";
import { useProgress } from "../store/useProgress";
import Markdown from "../components/Markdown";
import CodeEditor from "../components/CodeEditor";
import CodeViewer from "../components/CodeViewer";
import XPBadge from "../components/XPBadge";

export default function Exercise() {
  const { moduleId = "", lessonId = "" } = useParams();
  const navigate = useNavigate();

  const lesson = getLesson(lessonId);
  const mod = getModule(moduleId);
  const exercise = lesson?.exerciseId
    ? getExercise(lesson.exerciseId)
    : undefined;

  const unlocked = useProgress((s) => s.isLessonUnlocked(moduleId, lessonId));
  const completeLesson = useProgress((s) => s.completeLesson);

  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  if (!lesson || !mod || !exercise || lesson.moduleId !== moduleId) {
    return <Navigate to="/dashboard" replace />;
  }
  if (!unlocked) {
    return <Navigate to={`/module/${moduleId}`} replace />;
  }

  const canShowSolution = attempts >= 2;

  const handleFinish = () => {
    // Exercice libre : pas de correction auto, on valide à 100 % (subjectif).
    const { xpGained } = completeLesson(moduleId, lessonId, 100, lesson.xp);
    setXpGained(xpGained);
    setDone(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link
        to={`/module/${moduleId}`}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" />
        {mod.title}
      </Link>

      <header className="mb-6">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
          <Sparkles className="h-4 w-4" />
          Projet · {lesson.xp} XP
        </div>
        <h1 className="text-3xl font-bold">{exercise.title}</h1>
      </header>

      {/* Énoncé */}
      <section className="card mb-6 p-5">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-bold">
          <Target className="h-5 w-5 text-brand-500" />
          Énoncé
        </h2>
        <Markdown text={exercise.statement} />
      </section>

      {/* Éditeur */}
      <section className="mb-6">
        <CodeEditor
          initialCode={exercise.starterCode}
          language={exercise.language}
          onRun={() => setAttempts((a) => a + 1)}
        />
      </section>

      {/* Correction */}
      <section className="mb-8">
        {!showSolution ? (
          <button
            onClick={() => setShowSolution(true)}
            disabled={!canShowSolution}
            className="btn-ghost w-full"
          >
            <Eye className="h-4 w-4" />
            {canShowSolution
              ? "Voir la correction"
              : `Voir la correction (après ${2 - attempts} exécution${
                  2 - attempts > 1 ? "s" : ""
                } de plus)`}
          </button>
        ) : (
          <div className="animate-fade-in">
            <h2 className="mb-2 text-lg font-bold">Correction proposée</h2>
            <CodeViewer code={exercise.solution} language={exercise.language} />
            <p className="mt-2 text-xs text-slate-400">
              Ce n'est qu'une solution possible parmi d'autres. L'important,
              c'est que ton code fonctionne !
            </p>
          </div>
        )}
      </section>

      {/* Validation */}
      {!done ? (
        <button onClick={handleFinish} className="btn-primary w-full">
          <CheckCircle2 className="h-4 w-4" />
          Marquer comme terminé
        </button>
      ) : (
        <div className="card animate-fade-in p-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-500" />
          <h3 className="text-xl font-bold">Projet terminé, bravo !</h3>
          {xpGained > 0 ? (
            <div className="mt-4 flex justify-center">
              <XPBadge xp={xpGained} />
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-400">
              (XP déjà gagnée précédemment)
            </p>
          )}
          <button
            onClick={() => navigate(`/module/${moduleId}`)}
            className="btn-primary mt-6 w-full"
          >
            Retour au module
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </main>
  );
}
