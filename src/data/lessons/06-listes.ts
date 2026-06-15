import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "06-listes",
  moduleId: "module-2",
  title: "Listes et tableaux",
  xp: 25,
  concept: {
    text: `Une **liste** permet de stocker plusieurs valeurs dans une seule variable. On la crée avec des crochets \`[ ]\`.

- On accède à un élément par son **indice**, qui commence à **0** : \`fruits[0]\` est le premier.
- \`len(liste)\` donne le nombre d'éléments.
- \`liste.append(x)\` ajoute un élément à la fin.
- On peut parcourir une liste avec une boucle \`for\`.`,
    analogy:
      "Une liste, c'est comme une étagère numérotée : chaque case a une position (0, 1, 2…) et contient un objet. Tu peux ajouter, retirer ou regarder le contenu de chaque case.",
  },
  codeExample: {
    language: "python",
    code: `fruits = ["pomme", "banane", "cerise"]

print(fruits[0])
print(len(fruits))

fruits.append("kiwi")

for f in fruits:
    print(f)`,
    output: `pomme
3
pomme
banane
cerise
kiwi`,
  },
  quiz: [
    {
      question: "Quel est l'indice du premier élément d'une liste ?",
      options: ["1", "0", "-1", "Le premier n'a pas d'indice"],
      correctIndex: 1,
      explanation: "En Python (comme dans la plupart des langages), on compte à partir de 0.",
    },
    {
      question: "Comment ajouter un élément à la fin d'une liste ?",
      options: ["liste.add(x)", "liste.push(x)", "liste.append(x)", "liste + x"],
      correctIndex: 2,
      explanation: "`append()` ajoute l'élément à la fin de la liste.",
    },
    {
      question: "Que renvoie `len([10, 20, 30])` ?",
      options: ["2", "3", "30", "60"],
      correctIndex: 1,
      explanation: "`len()` compte le nombre d'éléments : ici 3.",
    },
  ],
};

export default lesson;
