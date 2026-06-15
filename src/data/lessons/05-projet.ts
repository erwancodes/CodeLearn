import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "05-projet",
  moduleId: "module-1",
  title: "Mini projet final",
  xp: 50,
  concept: {
    text: `Bravo, tu as vu les **4 piliers** de la programmation : variables, conditions, boucles et fonctions !

Il est temps de tout combiner dans un vrai petit programme. Pas de QCM ici : tu vas **écrire du code toi-même** et l'exécuter dans le navigateur.

Clique sur **Ouvrir l'exercice** pour commencer.`,
    analogy:
      "Tu as appris les notes une par une. Maintenant, tu joues ton premier morceau complet.",
  },
  codeExample: {
    language: "python",
    code: `# Tu vas combiner tout ce que tu as appris :
# - des variables
# - une condition
# - une boucle
# - une fonction`,
    output: `(à toi de jouer dans l'exercice)`,
  },
  quiz: [],
  exerciseId: "ex-05",
};

export default lesson;
