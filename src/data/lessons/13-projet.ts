import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "13-projet",
  moduleId: "module-3",
  title: "Page perso complète",
  xp: 80,
  concept: {
    text: `Dernier défi, et pas des moindres ! Tu as parcouru **tout le chemin** : variables, conditions, boucles, fonctions, listes, dictionnaires, fichiers, puis HTML, CSS et JavaScript. Énorme. 🎉

Pour ce projet final, tu vas écrire un petit programme **JavaScript** qui se présente : ton prénom, ton âge, tes hobbies. Tu vas réutiliser **tout ce que tu sais** dans un seul code.

Pas de QCM : c'est ton « épreuve finale ». Un code de départ t'attend, et la correction se débloque après 2 essais si tu coinces.

**Ce que tu vas mobiliser**
- des **variables** (prénom, âge, liste de hobbies)
- une **fonction** qui fabrique une phrase
- une **boucle** pour afficher chaque hobby
- une **condition** (majeur / mineur)

Clique sur **Ouvrir l'exercice** pour relever le défi.`,
    analogy:
      "C'est ton diplôme de fin de parcours : un projet libre où tu assembles, tout seul, toutes les briques apprises depuis la première leçon.",
  },
  codeExample: {
    title: "Le style de code attendu (JavaScript)",
    language: "javascript",
    code: `let prenom = "Alex";
let age = 20;

function presentation(prenom, age) {
  return "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
}

console.log(presentation(prenom, age));`,
    output: `Je m'appelle Alex et j'ai 20 ans.`,
  },
  quiz: [],
  exerciseId: "ex-13",
};

export default lesson;
