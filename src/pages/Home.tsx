import { Link } from "react-router-dom";
import { Flame, Settings as SettingsIcon, Trophy } from "lucide-react";
import { useProgress } from "../store/useProgress";
import { MODULES } from "../data/modules";
import { levelProgress } from "../utils/levels";
import ModuleCard from "../components/ModuleCard";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const username = useProgress((s) => s.settings.username);
  const totalXP = useProgress((s) => s.progress.totalXP);
  const streak = useProgress((s) => s.progress.streak);

  const { level, next, ratio } = levelProgress(totalXP);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* En-tête */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Salut {username} <span className="inline-block">👋</span>
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Prêt à coder un peu aujourd'hui&nbsp;?
          </p>
        </div>
        <Link to="/settings" className="btn-ghost">
          <SettingsIcon className="h-4 w-4" />
          Réglages
        </Link>
      </div>

      {/* Carte niveau / XP */}
      <div className="card mb-8 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300">
              <Trophy className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Niveau actuel
              </p>
              <p className="text-xl font-bold">{level.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                {totalXP}
              </p>
              <p className="text-xs text-slate-500">XP total</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl bg-orange-50 px-3 py-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
              <Flame className="h-5 w-5" />
              <span className="font-bold">{streak}</span>
              <span className="text-xs">j</span>
            </div>
          </div>
        </div>

        <ProgressBar ratio={ratio} />
        <p className="mt-2 text-xs text-slate-500">
          {next
            ? `Plus que ${next.min - totalXP} XP pour atteindre « ${next.name} »`
            : "Niveau maximum atteint, bravo ! 🎉"}
        </p>
      </div>

      {/* Grille des modules */}
      <h2 className="mb-4 text-xl font-bold">Tes modules</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </div>
    </main>
  );
}
