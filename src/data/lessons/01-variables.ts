import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "01-variables",
  moduleId: "module-1",
  title: "Variables et types",
  xp: 20,
  concept: {
    text: `Quand un programme tourne, il a besoin de **retenir des informations** : ton prénom, ton score, le nombre de vies dans un jeu… Pour ça, on utilise des **variables**.

Une **variable**, c'est une boîte avec un **nom**, dans laquelle on range une **valeur**. On met une valeur dedans avec le signe \`=\`.

\`\`\`python
score = 0
\`\`\`

Ici, on crée une boîte appelée \`score\` et on y met le nombre \`0\`. Plus tard, on peut **changer** ce qu'il y a dedans, ou **lire** la valeur.

**Les 4 types de base à connaître**

En Python, on ne précise jamais le type : il est deviné automatiquement selon ce qu'on met dans la boîte.

- **str** (texte) : toujours entre guillemets → \`"Bonjour"\`, \`"Léa"\`
- **int** (nombre entier) → \`42\`, \`0\`, \`-7\`
- **float** (nombre à virgule) → \`3.14\`, \`1.5\` (on écrit un point, pas une virgule !)
- **bool** (vrai ou faux) → \`True\` ou \`False\` (avec une majuscule)

**Afficher une valeur**

La fonction \`print()\` affiche quelque chose à l'écran. C'est ton meilleur ami pour voir ce qui se passe dans ton programme.

**Règles pour nommer une variable**
- pas d'espace : on écrit \`mon_score\` (avec un underscore \`_\`), pas \`mon score\`
- ça ne commence pas par un chiffre
- on choisit un nom **clair** : \`age\` est mieux que \`x\``,
    analogy:
      "Une variable, c'est comme un casier à ton nom au collège. Le nom du casier (la variable) ne change pas, mais tu peux changer ce que tu mets dedans : aujourd'hui ton sac, demain tes baskets. Le programme, lui, ouvre le casier par son nom pour voir ce qu'il y a dedans.",
  },
  codeExample: {
    title: "Créer et afficher des variables",
    language: "python",
    code: `age = 25
prenom = "Léa"
taille = 1.68
majeur = True

print(prenom)
print("Age :", age)
print("Majeure ?", majeur)`,
    output: `Léa
Age : 25
Majeure ? True`,
  },
  examples: [
    {
      title: "Changer la valeur d'une variable",
      language: "python",
      code: `vies = 3
print("Vies au départ :", vies)

vies = vies - 1   # on perd une vie
print("Après un dégât :", vies)`,
      output: `Vies au départ : 3
Après un dégât : 2`,
    },
    {
      title: "Faire des calculs avec des nombres",
      language: "python",
      code: `prix = 5
quantite = 3
total = prix * quantite

print("Total :", total, "euros")`,
      output: `Total : 15 euros`,
    },
  ],
  quiz: [
    {
      question: "Quel symbole utilise-t-on pour mettre une valeur dans une variable ?",
      options: ["==", "=", "=>", ":="],
      correctIndex: 1,
      explanation:
        "Le simple `=` sert à affecter (ranger) une valeur. Le double `==` servira plus tard à comparer deux valeurs.",
    },
    {
      question: 'Quel est le type de la valeur `"Bonjour"` ?',
      options: ["int", "bool", "str", "float"],
      correctIndex: 2,
      explanation:
        "Tout ce qui est entre guillemets est du texte, donc de type `str` (string).",
    },
    {
      question: "Que va afficher `print(3 + 4)` ?",
      options: ["34", "7", '"7"', "3 + 4"],
      correctIndex: 1,
      explanation:
        "Avec des nombres, `+` fait une addition. Le résultat affiché est 7. (Avec du texte, `+` collerait les mots.)",
    },
    {
      question: "Lequel de ces noms de variable est CORRECT en Python ?",
      options: ["mon score", "2eme_joueur", "mon_score", "mon-score"],
      correctIndex: 2,
      explanation:
        "Pas d'espace ni de tiret, et on ne commence pas par un chiffre. `mon_score` respecte toutes les règles.",
    },
    {
      question: "Comment écrit-on un nombre à virgule en Python ?",
      options: ["3,14", "3.14", '"3,14"', "3 virgule 14"],
      correctIndex: 1,
      explanation:
        "En programmation, on utilise un point pour les décimales : `3.14` (un float).",
    },
  ],
};

export default lesson;
