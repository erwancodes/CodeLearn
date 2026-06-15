import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "09-projet",
  moduleId: "module-2",
  title: "Mini projet CSV",
  xp: 60,
  concept: {
    text: `Tu sais maintenant manipuler des **listes**, des **dictionnaires** et des **fichiers**. On va combiner tout ça pour traiter des données façon « tableur ».

Pas de QCM : tu vas écrire un programme qui analyse une petite liste de données et calcule un résultat.

Clique sur **Ouvrir l'exercice** pour commencer.`,
    analogy:
      "C'est le travail quotidien d'un développeur : prendre des données brutes et en sortir une information utile.",
  },
  codeExample: {
    language: "python",
    code: `# Tu vas manipuler une liste de dictionnaires
# (chaque ligne = un agent avec son service et son salaire)
# puis calculer une statistique.`,
    output: `(à toi de jouer dans l'exercice)`,
  },
  quiz: [],
  exerciseId: "ex-09",
};

export default lesson;
