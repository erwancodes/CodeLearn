import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "01-variables",
  moduleId: "module-1",
  title: "Variables et types",
  xp: 20,
  concept: {
    text: `Une **variable**, c'est une boîte dans laquelle on range une valeur pour la réutiliser plus tard. On lui donne un **nom** et on y met quelque chose avec le signe \`=\`.

En Python, on n'a pas besoin de préciser le type : il est deviné automatiquement.

Les types de base à connaître :
- **str** (texte) : \`"Bonjour"\`
- **int** (nombre entier) : \`42\`
- **float** (nombre à virgule) : \`3.14\`
- **bool** (vrai/faux) : \`True\` ou \`False\`

On peut afficher une valeur avec la fonction \`print()\`.`,
    analogy:
      "Une variable, c'est comme une étiquette collée sur une boîte de rangement : le nom est sur l'étiquette, le contenu est dans la boîte. Tu peux changer le contenu quand tu veux.",
  },
  codeExample: {
    language: "python",
    code: `age = 25
prenom = "Léa"
taille = 1.68
majeur = True

print(prenom)
print("Age :", age)
print("Majeur ?", majeur)`,
    output: `Léa
Age : 25
Majeur ? True`,
  },
  quiz: [
    {
      question: "Quel symbole utilise-t-on pour assigner une valeur à une variable ?",
      options: ["==", "=", "=>", ":="],
      correctIndex: 1,
      explanation:
        "Le simple `=` sert à affecter une valeur. Le double `==` sert plus tard à comparer deux valeurs.",
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
        "Avec des nombres, `+` fait une addition. Le résultat affiché est 7.",
    },
  ],
};

export default lesson;
