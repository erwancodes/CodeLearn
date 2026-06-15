type Props = {
  ratio: number; // 0..1
  className?: string;
  color?: string;
};

// Barre de progression générique.
export default function ProgressBar({ ratio, className = "", color }: Props) {
  const pct = Math.round(Math.min(1, Math.max(0, ratio)) * 100);
  return (
    <div
      className={`h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color ?? "#2563eb" }}
      />
    </div>
  );
}
