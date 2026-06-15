import type { Lesson } from "../../types";

import l01 from "./01-variables";
import l02 from "./02-conditions";
import l03 from "./03-boucles";
import l04 from "./04-fonctions";
import l05 from "./05-projet";
import l06 from "./06-listes";
import l07 from "./07-dicts";
import l08 from "./08-fichiers";
import l09 from "./09-projet";
import l10 from "./10-html";
import l11 from "./11-css";
import l12 from "./12-js";
import l13 from "./13-projet";
import l14 from "./14-page-complete";
import l15 from "./15-styliser";
import l16 from "./16-responsive";
import l17 from "./17-mon-site";
import l18 from "./18-flexbox";
import l19 from "./19-boutons-hover";
import l20 from "./20-cartes-degrades";
import l21 from "./21-animations";
import l22 from "./22-projet-portfolio";
import l23 from "./23-js-clic";
import l24 from "./24-js-compteur";
import l25 from "./25-js-afficher-cacher";
import l26 from "./26-js-projet";
import l27 from "./27-jeu-clicker";
import l28 from "./28-jeu-quiz";
import l29 from "./29-jeu-projet";
import l30 from "./30-defi-landing";
import l31 from "./31-defi-todo";
import l32 from "./32-defi-final";
import d01 from "./docker-01-cest-quoi";
import d02 from "./docker-02-images-conteneurs";
import d03 from "./docker-03-commandes";
import d04 from "./docker-04-dockerfile";

export const LESSONS: Lesson[] = [
  l01,
  l02,
  l03,
  l04,
  l05,
  l06,
  l07,
  l08,
  l09,
  l10,
  l11,
  l12,
  l13,
  l14,
  l15,
  l16,
  l17,
  l18,
  l19,
  l20,
  l21,
  l22,
  l23,
  l24,
  l25,
  l26,
  l27,
  l28,
  l29,
  l30,
  l31,
  l32,
  d01,
  d02,
  d03,
  d04,
];

const LESSON_MAP: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.id, l]),
);

export function getLesson(lessonId: string): Lesson | undefined {
  return LESSON_MAP[lessonId];
}

// Une leçon est un "projet" (exercice libre de code) si elle n'a pas de quiz
// mais un exerciseId.
export function isProjectLesson(lesson: Lesson): boolean {
  return lesson.quiz.length === 0 && !!lesson.exerciseId;
}

// Une leçon est un "atelier site web" si elle embarque un webBuilder.
export function isBuilderLesson(lesson: Lesson): boolean {
  return !!lesson.webBuilder;
}
