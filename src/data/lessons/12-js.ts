import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "12-js",
  moduleId: "module-3",
  title: "JavaScript intro",
  xp: 30,
  concept: {
    text: `Le **JavaScript** rend une page web **interactive** : réagir à un clic, modifier du contenu, calculer…

La syntaxe ressemble à Python mais avec quelques différences :
- on déclare une variable avec \`let\` ou \`const\`
- les blocs sont entourés d'**accolades** \`{ }\`
- on affiche dans la console avec \`console.log()\`
- chaque instruction se termine par un \`;\`

Les fonctions s'écrivent avec \`function\`.`,
    analogy:
      "Si le HTML est le squelette et le CSS la déco, le JavaScript est le système nerveux : il fait réagir la maison quand on appuie sur un interrupteur.",
  },
  codeExample: {
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
      explanation: "`const` déclare une valeur qui ne sera pas réaffectée ; `let` pour une variable modifiable.",
    },
    {
      question: "Comment affiche-t-on un message dans la console JS ?",
      options: ["print()", "echo()", "console.log()", "println()"],
      correctIndex: 2,
      explanation: "En JavaScript, on utilise `console.log()` (l'équivalent de `print()` en Python).",
    },
  ],
};

export default lesson;
