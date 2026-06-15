import { Sparkles } from "lucide-react";

// Badge "+X XP" animé, affiché après la complétion d'une leçon.
export default function XPBadge({ xp }: { xp: number }) {
  return (
    <div className="animate-xp-pop inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
      <Sparkles className="h-4 w-4" />+{xp} XP
    </div>
  );
}
