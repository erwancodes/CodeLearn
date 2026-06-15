import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "06-listes",
  moduleId: "module-2",
  title: "Listes et tableaux",
  xp: 25,
  concept: {
    text: `Jusqu'ici, une variable ne rangeait **qu'une seule** valeur. Mais comment stocker la liste de tes amis, ou les scores d'une partie ? Avec une **liste** !

Une **liste** range **plusieurs valeurs** dans une seule variable. On la crée avec des **crochets** \`[ ]\`, en séparant les éléments par des virgules.

\`\`\`python
fruits = ["pomme", "banane", "cerise"]
\`\`\`

**Accéder à un élément : l'indice**

Chaque élément a une **position** (un indice). ⚠️ Surprise : on compte à partir de **0** !

- \`fruits[0]\` → "pomme" (le premier)
- \`fruits[1]\` → "banane"
- \`fruits[2]\` → "cerise"

**Les opérations utiles**

- \`len(fruits)\` → le **nombre** d'éléments (ici 3)
- \`fruits.append("kiwi")\` → **ajoute** un élément à la fin
- \`fruits[0] = "fraise"\` → **modifie** le premier élément
- \`"banane" in fruits\` → vérifie si un élément **existe** (renvoie True/False)

**Parcourir une liste**

Avec une boucle \`for\`, on passe sur chaque élément, un par un :

\`\`\`python
for fruit in fruits:
    print(fruit)
\`\`\`

C'est l'une des choses les plus utiles en programmation : faire la même action sur tous les éléments d'une liste.`,
    analogy:
      "Une liste, c'est comme un train avec des wagons numérotés à partir de 0. Chaque wagon contient quelque chose. Tu peux regarder le wagon n°2, accrocher un nouveau wagon à la fin (append), ou passer dans tous les wagons l'un après l'autre (la boucle).",
  },
  codeExample: {
    title: "Créer, lire et parcourir une liste",
    language: "python",
    code: `fruits = ["pomme", "banane", "cerise"]

print(fruits[0])      # le premier
print(len(fruits))    # combien y en a-t-il ?

fruits.append("kiwi") # on en ajoute un

for f in fruits:
    print(f)`,
    output: `pomme
3
pomme
banane
cerise
kiwi`,
  },
  examples: [
    {
      title: "Modifier un élément et en chercher un",
      language: "python",
      code: `scores = [10, 20, 30]
scores[1] = 99          # on change le 2e

print(scores)
print(20 in scores)     # est-ce que 20 est encore là ?`,
      output: `[10, 99, 30]
False`,
    },
    {
      title: "Compter avec une liste",
      language: "python",
      code: `paniers = [3, 5, 2, 4]
total = 0
for p in paniers:
    total = total + p

print("Total de pommes :", total)`,
      output: `Total de pommes : 14`,
    },
  ],
  quiz: [
    {
      question: "Quel est l'indice du premier élément d'une liste ?",
      options: ["1", "0", "-1", "Le premier n'a pas d'indice"],
      correctIndex: 1,
      explanation:
        "En Python (comme dans la plupart des langages), on compte à partir de 0.",
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
    {
      question: 'Avec `couleurs = ["rouge", "vert", "bleu"]`, que vaut `couleurs[2]` ?',
      options: ["rouge", "vert", "bleu", "Une erreur"],
      correctIndex: 2,
      explanation:
        "On compte à partir de 0 : indice 0 = rouge, 1 = vert, 2 = bleu.",
    },
    {
      question: "À quoi sert une boucle `for f in fruits:` ?",
      options: [
        "À supprimer la liste",
        "À passer sur chaque élément de la liste, un par un",
        "À trier la liste",
        "À compter jusqu'à fruits",
      ],
      correctIndex: 1,
      explanation:
        "La boucle `for` parcourt la liste : `f` prend tour à tour la valeur de chaque élément.",
    },
  ],
};

export default lesson;
