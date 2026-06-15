import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Lightbulb, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { getModule } from "../data/modules";
import { getLesson, isProjectLesson } from "../data/lessons";
import { useProgress } from "../store/useProgress";
import Markdown from "../components/Markdown";
import CodeViewer from "../components/CodeViewer";
import QuizBlock from "../components/QuizBlock";
import XPBadge from "../components/XPBadge";

export default function Lesson() {
  const { moduleId = "", lessonId = "" } = useParams();
  const navigate = useNavigate();

  const lesson = getLesson(lessonId);
  const mod = getModule(moduleId);
  const unlocked = useProgress((s) => s.isLessonUnlocked(moduleId, lessonId));
  const completeLesson = useProgress((s) => s.completeLesson);

  const [answers, setAnswers] = useState<(boolean | null)[]>(
    () => (lesson ? lesson.quiz.map(() => null) : []),
  );
  const [validated, setValidated] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  // Leçon suivante dans le module (ou null). Hook déclaré avant tout return.
  const nextLessonId = useMemo(() => {
    if (!mod) return null;
    const idx = mod.lessonIds.indexOf(lessonId);
    return idx >= 0 && idx < mod.lessonIds.length - 1
      ? mod.lessonIds[idx + 1]
      : null;
  }, [mod, lessonId]);

  // Leçon "projet" → rediriger vers la page exercice.
  if (lesson && isProjectLesson(lesson)) {
    return <Navigate to={`/exercise/${moduleId}/${lessonId}`} replace />;
  }
  if (!lesson || !mod || lesson.moduleId !== moduleId) {
    return <Navigate to="/dashboard" replace />;
  }
  if (!unlocked) {
    return <Navigate to={`/module/${moduleId}`} replace />;
  }

  const allAnswered = answers.length > 0 && answers.every((a) => a !== null);

  const handleAnswer = (i: number, correct: boolean) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = correct;
      return next;
    });
  };

  const handleValidate = () => {
    const correct = answers.filter((a) => a === true).length;
    const score =
      answers.length === 0 ? 100 : Math.round((correct / answers.length) * 100);
    const { xpGained } = completeLesson(moduleId, lessonId, score, lesson.xp);
    setFinalScore(score);
    setXpGained(xpGained);
    setValidated(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const goNext = () => {
    if (nextLessonId) {
      const nextLesson = getLesson(nextLessonId);
      if (nextLesson && isProjectLesson(nextLesson)) {
        navigate(`/exercise/${moduleId}/${nextLessonId}`);
      } else {
        navigate(`/lesson/${moduleId}/${nextLessonId}`);
      }
    } else {
      navigate(`/module/${moduleId}`);
    }
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

      {/* 1. En-tête */}
      <header className="mb-8">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
          <Sparkles className="h-4 w-4" />
          {lesson.xp} XP à gagner
        </div>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
      </header>

      {/* 2. Concept */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-bold">Concept</h2>
        <Markdown text={lesson.concept.text} />
        <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <span className="font-semibold">Analogie : </span>
            {lesson.concept.analogy}
          </p>
        </div>
      </section>

      {/* 3. Exemple */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-bold">Exemple</h2>
        <CodeViewer
          code={lesson.codeExample.code}
          language={lesson.codeExample.language}
        />
      </section>

      {/* 4. Résultat attendu */}
      <section className="mb-8">
        <h2 className="mb-2 text-lg font-bold">Résultat attendu</h2>
        <pre className="code-block overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          {lesson.codeExample.output}
        </pre>
      </section>

      {/* 5. Quiz */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Quiz</h2>
        <div className="space-y-4">
          {lesson.quiz.map((q, i) => (
            <QuizBlock
              key={i}
              question={q}
              index={i}
              onAnswer={(correct) => handleAnswer(i, correct)}
            />
          ))}
        </div>
      </section>

      {/* 6 + 7. Validation et animation XP */}
      {!validated ? (
        <button
          onClick={handleValidate}
          disabled={!allAnswered}
          className="btn-primary w-full"
        >
          {allAnswered
            ? "Valider et continuer"
            : "Réponds à toutes les questions pour continuer"}
        </button>
      ) : (
        <div className="card animate-fade-in p-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-500" />
          <h3 className="text-xl font-bold">Leçon terminée !</h3>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Score : <span className="font-semibold">{finalScore}%</span>
          </p>
          {xpGained > 0 && (
            <div className="mt-4 flex justify-center">
              <XPBadge xp={xpGained} />
            </div>
          )}
          {xpGained === 0 && (
            <p className="mt-3 text-sm text-slate-400">
              (XP déjà gagnée lors d'une précédente complétion)
            </p>
          )}
          <button onClick={goNext} className="btn-primary mt-6 w-full">
            {nextLessonId ? "Leçon suivante" : "Retour au module"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </main>
  );
}
