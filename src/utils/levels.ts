import type { Level } from "../types";

// Paliers de niveau basés sur l'XP total (cf. PRD).
export const LEVELS: Level[] = [
  { name: "Débutant", min: 0, max: 99 },
  { name: "Apprenti", min: 100, max: 299 },
  { name: "Junior", min: 300, max: 599 },
  { name: "Développeur", min: 600, max: 999 },
  { name: "Senior", min: 1000, max: Infinity },
];

export function getLevel(totalXP: number): Level {
  return (
    LEVELS.find((l) => totalXP >= l.min && totalXP <= l.max) ??
    LEVELS[LEVELS.length - 1]
  );
}

// Progression (0..1) à l'intérieur du niveau courant.
export function levelProgress(totalXP: number): {
  level: Level;
  next: Level | null;
  ratio: number;
  xpIntoLevel: number;
  xpForLevel: number;
} {
  const level = getLevel(totalXP);
  const idx = LEVELS.indexOf(level);
  const next = idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;

  if (!next) {
    return { level, next: null, ratio: 1, xpIntoLevel: totalXP - level.min, xpForLevel: 0 };
  }

  const xpForLevel = next.min - level.min;
  const xpIntoLevel = totalXP - level.min;
  const ratio = Math.min(1, xpIntoLevel / xpForLevel);
  return { level, next, ratio, xpIntoLevel, xpForLevel };
}
