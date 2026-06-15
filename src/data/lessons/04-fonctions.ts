import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "04-fonctions",
  moduleId: "module-1",
  title: "Fonctions et return",
  xp: 25,
  concept: {
    text: `Une **fonction** est un bloc de code réutilisable auquel on donne un nom. On la définit une fois, puis on l'**appelle** autant de fois qu'on veut.

- On la définit avec \`def\`.
- Elle peut recevoir des **paramètres** (des valeurs en entrée).
- Elle peut renvoyer un résultat avec \`return\`.

Sans \`return\`, la fonction fait son travail mais ne renvoie rien d'utilisable.`,
    analogy:
      "Une fonction, c'est une recette de cuisine : tu donnes des ingrédients (les paramètres), tu suis les étapes, et tu obtiens un plat (le return). Tu peux refaire la recette quand tu veux.",
  },
  codeExample: {
    language: "python",
    code: `def addition(a, b):
    resultat = a + b
    return resultat

# Appel de la fonction
x = addition(3, 5)
print(x)
print(addition(10, 20))`,
    output: `8
30`,
  },
  quiz: [
    {
      question: "Quel mot-clé sert à définir une fonction en Python ?",
      options: ["function", "def", "func", "define"],
      correctIndex: 1,
      explanation: "En Python, une fonction se définit avec `def`.",
    },
    {
      question: "À quoi sert `return` ?",
      options: [
        "À afficher du texte",
        "À renvoyer un résultat utilisable",
        "À arrêter le programme",
        "À créer une variable",
      ],
      correctIndex: 1,
      explanation:
        "`return` renvoie une valeur que l'on peut stocker ou réutiliser après l'appel.",
    },
    {
      question: "Dans `addition(3, 5)`, comment appelle-t-on les valeurs 3 et 5 ?",
      options: ["Des variables", "Des arguments", "Des retours", "Des boucles"],
      correctIndex: 1,
      explanation:
        "Les valeurs passées lors de l'appel sont les arguments (qui remplissent les paramètres a et b).",
    },
  ],
};

export default lesson;
