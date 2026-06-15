import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "12-js",
  moduleId: "module-3",
  title: "JavaScript intro",
  xp: 30,
  concept: {
    text: `Le HTML fait la structure, le CSS la déco… mais une page reste **figée**. Le **JavaScript** (JS) la rend **vivante** : réagir à un clic, modifier le texte, calculer, animer…

Bonne nouvelle : tu connais déjà les concepts (variables, conditions, boucles, fonctions). En JavaScript, c'est pareil, juste avec une **écriture un peu différente** de Python.

**Les différences à retenir**

- On déclare une variable avec \`let\` (modifiable) ou \`const\` (qui ne change pas).
- Les blocs sont entourés d'**accolades** \`{ }\` (au lieu de l'indentation).
- Chaque instruction se termine par un point-virgule \`;\`.
- On affiche avec \`console.log()\` (l'équivalent du \`print()\` de Python).

**Une variable**

\`\`\`javascript
let score = 0;
const nom = "Léa";
\`\`\`

**Une condition**

\`\`\`javascript
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
\`\`\`

Remarque les **parenthèses** autour de la condition et les **accolades** autour du code.

**Une fonction**

\`\`\`javascript
function saluer(prenom) {
  return "Bonjour " + prenom;
}
\`\`\`

Le mot-clé est \`function\` (au lieu de \`def\`), mais le principe est identique.`,
    analogy:
      "Si le HTML est le squelette et le CSS les habits, le JavaScript est le système nerveux : c'est lui qui fait réagir la page quand tu cliques, comme un interrupteur qui allume la lumière. Tu connais déjà la logique (Python) ; ici tu apprends juste une nouvelle façon de l'écrire.",
  },
  codeExample: {
    title: "Variables, fonction et condition en JS",
    language: "javascript",
    code: `let nom = "Léa";
const age = 25;

function saluer(prenom) {
  return "Bonjour " + prenom;
}

console.log(saluer(nom));

if (age >= 18) {
  console.log("Majeur");
}`,
    output: `Bonjour Léa
Majeur`,
  },
  examples: [
    {
      title: "Une boucle for en JavaScript",
      language: "javascript",
      code: `for (let i = 0; i < 3; i++) {
  console.log("Tour " + i);
}`,
      output: `Tour 0
Tour 1
Tour 2`,
    },
    {
      title: "Parcourir une liste (un tableau)",
      language: "javascript",
      code: `let fruits = ["pomme", "banane"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,
      output: `pomme
banane`,
    },
  ],
  quiz: [
    {
      question: "À quoi sert principalement JavaScript dans une page web ?",
      options: [
        "À structurer le contenu",
        "À styliser l'apparence",
        "À rendre la page interactive",
        "À héberger le site",
      ],
      correctIndex: 2,
      explanation:
        "JavaScript ajoute l'interactivité : clics, animations, calculs, mises à jour dynamiques.",
    },
    {
      question: "Comment déclare-t-on une variable constante en JavaScript ?",
      options: ["var", "let", "const", "def"],
      correctIndex: 2,
      explanation:
        "`const` déclare une valeur qui ne sera pas réaffectée ; `let` sert pour une variable modifiable.",
    },
    {
      question: "Comment affiche-t-on un message dans la console JS ?",
      options: ["print()", "echo()", "console.log()", "println()"],
      correctIndex: 2,
      explanation:
        "En JavaScript, on utilise `console.log()` (l'équivalent du `print()` de Python).",
    },
    {
      question: "Qu'est-ce qui délimite un bloc de code en JavaScript ?",
      options: [
        "L'indentation",
        "Des accolades { }",
        "Des crochets [ ]",
        "Le mot-clé end",
      ],
      correctIndex: 1,
      explanation:
        "JavaScript utilise des accolades `{ }` pour les blocs (alors que Python utilise l'indentation).",
    },
    {
      question: "Quel mot-clé définit une fonction en JavaScript ?",
      options: ["def", "func", "function", "fun"],
      correctIndex: 2,
      explanation: "En JavaScript, une fonction se définit avec `function`.",
    },
  ],
};

export default lesson;
