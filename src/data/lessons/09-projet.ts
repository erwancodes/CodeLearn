import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "09-projet",
  moduleId: "module-2",
  title: "Mini projet CSV",
  xp: 60,
  concept: {
    text: `Tu sais maintenant manipuler des **listes**, des **dictionnaires** et des **fichiers**. C'est exactement ce qu'on utilise pour traiter des **données**, comme dans un tableur (Excel).

Dans ce projet, tu vas travailler sur une petite liste de données et en sortir une **information utile** : une moyenne, un maximum… C'est le travail quotidien d'un développeur !

Pas de QCM : tu écris ton code et tu l'exécutes pour de vrai.

**Le truc à retenir** : une liste de dictionnaires, c'est comme un tableau.

\`\`\`python
agents = [
    {"nom": "Dupont", "salaire": 2100},
    {"nom": "Martin", "salaire": 2400},
]
\`\`\`

Chaque dictionnaire est une **ligne**, et chaque clé est une **colonne**. Pour tout parcourir, on combine une boucle \`for\` et l'accès par clé \`agent["salaire"]\`.

Clique sur **Ouvrir l'exercice** pour commencer.`,
    analogy:
      "Une liste de dictionnaires, c'est un tableau : chaque dictionnaire est une ligne, chaque clé est le titre d'une colonne. Tu parcours les lignes une par une avec une boucle.",
  },
  codeExample: {
    title: "Parcourir un 'tableau' (liste de dictionnaires)",
    language: "python",
    code: `agents = [
    {"nom": "Dupont", "salaire": 2100},
    {"nom": "Martin", "salaire": 2400},
]

for a in agents:
    print(a["nom"], "gagne", a["salaire"], "euros")`,
    output: `Dupont gagne 2100 euros
Martin gagne 2400 euros`,
  },
  quiz: [],
  exerciseId: "ex-09",
};

export default lesson;
