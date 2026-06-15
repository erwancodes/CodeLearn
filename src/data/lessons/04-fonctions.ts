import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "04-fonctions",
  moduleId: "module-1",
  title: "Fonctions et return",
  xp: 25,
  concept: {
    text: `Quand tu utilises le même bout de code à plusieurs endroits, tu peux lui donner un **nom** et le réutiliser : c'est une **fonction**.

Une fonction, c'est une **machine** : tu lui donnes des choses en entrée, elle fait son travail, et elle te ressort un résultat.

**Définir une fonction**

\`\`\`python
def saluer(prenom):
    print("Bonjour", prenom)
\`\`\`

- \`def\` annonce qu'on **définit** une fonction.
- \`saluer\` est son **nom**.
- \`prenom\` est un **paramètre** : une information qu'on lui donne.
- Le code indenté en dessous est ce qu'elle fait.

**Appeler une fonction**

Définir une fonction ne l'exécute pas ! Il faut l'**appeler** par son nom :

\`\`\`python
saluer("Léa")    # affiche : Bonjour Léa
saluer("Tom")    # affiche : Bonjour Tom
\`\`\`

**Renvoyer un résultat avec \`return\`**

Souvent, on veut **récupérer** un résultat pour le réutiliser. C'est le rôle de \`return\` :

\`\`\`python
def double(x):
    return x * 2

resultat = double(5)   # resultat vaut 10
\`\`\`

Sans \`return\`, la fonction fait son travail mais ne renvoie rien d'utilisable (elle renvoie \`None\`).

**Paramètres vs arguments**
- Le **paramètre**, c'est le nom dans la définition (\`prenom\`).
- L'**argument**, c'est la vraie valeur qu'on envoie à l'appel (\`"Léa"\`).`,
    analogy:
      "Une fonction, c'est une recette de cuisine. Tu donnes des ingrédients (les arguments), tu suis les étapes, et tu obtiens un plat (le `return`). Une fois la recette écrite, tu peux la refaire autant de fois que tu veux avec des ingrédients différents, sans tout réexpliquer.",
  },
  codeExample: {
    title: "Une fonction qui renvoie une addition",
    language: "python",
    code: `def addition(a, b):
    resultat = a + b
    return resultat

x = addition(3, 5)
print(x)
print(addition(10, 20))`,
    output: `8
30`,
  },
  examples: [
    {
      title: "Une fonction sans return (elle affiche seulement)",
      language: "python",
      code: `def dire_bonjour(prenom):
    print("Salut " + prenom + " !")

dire_bonjour("Léa")
dire_bonjour("Tom")`,
      output: `Salut Léa !
Salut Tom !`,
    },
    {
      title: "Réutiliser le résultat d'une fonction",
      language: "python",
      code: `def carre(n):
    return n * n

# On peut combiner les résultats
print(carre(3) + carre(4))   # 9 + 16`,
      output: `25`,
    },
  ],
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
        "À renvoyer un résultat qu'on peut réutiliser",
        "À arrêter tout le programme",
        "À créer une variable",
      ],
      correctIndex: 1,
      explanation:
        "`return` renvoie une valeur que l'on peut stocker ou réutiliser après l'appel.",
    },
    {
      question: "Que se passe-t-il si on définit une fonction mais qu'on ne l'appelle jamais ?",
      options: [
        "Elle s'exécute quand même une fois",
        "Son code ne s'exécute pas",
        "Le programme plante",
        "Elle s'exécute en boucle",
      ],
      correctIndex: 1,
      explanation:
        "Définir une fonction ne fait que la créer. Tant qu'on ne l'appelle pas par son nom, son code ne tourne pas.",
    },
    {
      question: "Dans `addition(3, 5)`, comment appelle-t-on les valeurs 3 et 5 ?",
      options: ["Des variables", "Des arguments", "Des retours", "Des boucles"],
      correctIndex: 1,
      explanation:
        "Les valeurs passées lors de l'appel sont les arguments (ils remplissent les paramètres a et b).",
    },
    {
      question: "Avec `def double(x): return x * 2`, que vaut `double(7)` ?",
      options: ["7", "9", "14", "rien"],
      correctIndex: 2,
      explanation: "La fonction renvoie 7 * 2, soit 14.",
    },
  ],
};

export default lesson;
