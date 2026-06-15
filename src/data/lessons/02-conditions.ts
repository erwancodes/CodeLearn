import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "02-conditions",
  moduleId: "module-1",
  title: "if / elif / else",
  xp: 20,
  concept: {
    text: `Les **conditions** permettent à un programme de prendre des décisions. On teste si quelque chose est vrai, et on exécute du code en conséquence.

- \`if\` : si la condition est vraie
- \`elif\` : sinon, si une autre condition est vraie
- \`else\` : sinon (dans tous les autres cas)

Les comparaisons utiles : \`==\` (égal), \`!=\` (différent), \`<\`, \`>\`, \`<=\`, \`>=\`.

⚠️ En Python, l'**indentation** (les espaces au début de la ligne) est obligatoire : elle indique quel code dépend de la condition.`,
    analogy:
      "C'est comme un videur à l'entrée d'une boîte : SI tu as plus de 18 ans, tu entres, SINON tu restes dehors. Le programme suit exactement le même raisonnement.",
  },
  codeExample: {
    language: "python",
    code: `note = 14

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Passable")
else:
    print("Insuffisant")`,
    output: `Passable`,
  },
  quiz: [
    {
      question: "Quel mot-clé utilise-t-on pour le cas « sinon, dans tous les autres cas » ?",
      options: ["elif", "otherwise", "else", "default"],
      correctIndex: 2,
      explanation:
        "`else` capture tous les cas non traités par `if` et `elif`.",
    },
    {
      question: "Comment teste-t-on si deux valeurs sont égales ?",
      options: ["=", "==", "equals", "->"],
      correctIndex: 1,
      explanation:
        "Le double `==` compare. Le simple `=` sert uniquement à affecter une valeur.",
    },
    {
      question: "Qu'est-ce qui est obligatoire en Python après les `:` d'une condition ?",
      options: [
        "Un point-virgule",
        "Des accolades { }",
        "L'indentation (des espaces)",
        "Le mot-clé then",
      ],
      correctIndex: 2,
      explanation:
        "Python utilise l'indentation au lieu des accolades pour délimiter les blocs de code.",
    },
  ],
};

export default lesson;
