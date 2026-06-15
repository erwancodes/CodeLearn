import { Link, useLocation } from "react-router-dom";
import { Code2, Flame, Moon, Sun, Star } from "lucide-react";
import { useProgress } from "../store/useProgress";
import { getLevel } from "../utils/levels";

export default function Navbar() {
  const { pathname } = useLocation();
  const username = useProgress((s) => s.settings.username);
  const theme = useProgress((s) => s.settings.theme);
  const toggleTheme = useProgress((s) => s.toggleTheme);
  const totalXP = useProgress((s) => s.progress.totalXP);
  const streak = useProgress((s) => s.progress.streak);

  // On masque la navbar pendant l'onboarding.
  if (!username || pathname === "/" || pathname === "/onboarding") return null;

  const level = getLevel(totalXP);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/dashboard" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="text-lg">CodeLearn</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="hidden items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300 sm:inline-flex"
            title="Niveau"
          >
            <Star className="h-4 w-4" />
            {level.name}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
            title="XP total"
          >
            <Star className="h-4 w-4 sm:hidden" />
            {totalXP} XP
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-300"
            title="Jours consécutifs"
          >
            <Flame className="h-4 w-4" />
            {streak}
          </span>
          <button
            onClick={toggleTheme}
            className="btn-ghost h-9 w-9 !px-0"
            aria-label="Changer de thème"
            title="Changer de thème"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
