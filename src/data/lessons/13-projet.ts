import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "13-projet",
  moduleId: "module-3",
  title: "Page perso complète",
  xp: 80,
  concept: {
    text: `Dernier défi ! Tu as découvert HTML, CSS et JavaScript. Pour ce projet final, tu vas écrire un petit programme **JavaScript** qui génère le contenu d'une mini page de présentation.

Pas de QCM : c'est le moment de montrer tout ce que tu as appris.

Clique sur **Ouvrir l'exercice** pour commencer.`,
    analogy:
      "C'est ton diplôme : un projet libre où tu assembles toutes les briques apprises depuis le début.",
  },
  codeExample: {
    language: "javascript",
    code: `// Tu vas combiner variables, fonction, condition et boucle
// en JavaScript pour produire une présentation personnalisée.`,
    output: `(à toi de jouer dans l'exercice)`,
  },
  quiz: [],
  exerciseId: "ex-13",
};

export default lesson;
