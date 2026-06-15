import { useState } from "react";
import { Check, X, Info } from "lucide-react";
import type { QuizQuestion } from "../types";

type Props = {
  question: QuizQuestion;
  index: number;
  onAnswer: (isCorrect: boolean) => void;
};

// Une question QCM interactive. Une fois répondue, le choix est verrouillé et
// l'explication s'affiche.
export default function QuizBlock({ question, index, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    onAnswer(i === question.correctIndex);
  };

  return (
    <div className="card p-5">
      <p className="mb-4 font-semibold">
        <span className="mr-2 text-brand-600 dark:text-brand-400">
          Q{index + 1}.
        </span>
        {question.question}
      </p>

      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;

          let style =
            "border-slate-200 hover:border-brand-400 dark:border-slate-700";
          let icon = null;
          if (answered) {
            if (isCorrect) {
              style =
                "border-green-500 bg-green-50 dark:bg-green-500/10 dark:border-green-500";
              icon = <Check className="h-4 w-4 text-green-600" />;
            } else if (isSelected) {
              style =
                "border-red-500 bg-red-50 dark:bg-red-500/10 dark:border-red-500";
              icon = <X className="h-4 w-4 text-red-600" />;
            } else {
              style = "border-slate-200 opacity-60 dark:border-slate-700";
            }
          }

          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={answered}
              className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm transition ${style} ${
                answered ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span>{opt}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="animate-fade-in mt-4 flex gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
          <span>{question.explanation}</span>
        </div>
      )}
    </div>
  );
}
