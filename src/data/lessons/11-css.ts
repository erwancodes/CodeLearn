import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "11-css",
  moduleId: "module-3",
  title: "CSS et mise en page",
  xp: 20,
  concept: {
    text: `Le **CSS** sert à **styliser** le HTML : couleurs, tailles, espacements, polices, mise en page.

Une règle CSS cible un **sélecteur** (ex. \`h1\`) et lui applique des **propriétés** :

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
}
\`\`\`

Sélecteurs courants :
- par balise : \`p\`
- par classe : \`.bouton\`
- par identifiant : \`#menu\``,
    analogy:
      "Si le HTML est le squelette de la maison, le CSS est la décoration : la peinture, les meubles, la disposition des pièces. Même maison, ambiances très différentes.",
  },
  codeExample: {
    language: "css",
    code: `h1 {
  color: navy;
  text-align: center;
}

.carte {
  background: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
}`,
    output: `Le titre h1 devient bleu marine et centré.
Les éléments de classe "carte" ont un fond gris,
des marges intérieures et des coins arrondis.`,
  },
  quiz: [
    {
      question: "À quoi sert le CSS ?",
      options: [
        "À structurer le contenu",
        "À styliser l'apparence",
        "À calculer des données",
        "À gérer la base de données",
      ],
      correctIndex: 1,
      explanation: "Le CSS gère l'apparence : couleurs, tailles, positions, etc.",
    },
    {
      question: "Comment cible-t-on un élément ayant `class=\"carte\"` ?",
      options: ["#carte", ".carte", "carte", "*carte"],
      correctIndex: 1,
      explanation: "Un point `.` cible une classe ; un dièse `#` cible un identifiant.",
    },
    {
      question: "Quelle propriété change la couleur du texte ?",
      options: ["background", "font", "color", "text"],
      correctIndex: 2,
      explanation: "`color` définit la couleur du texte (`background` est la couleur de fond).",
    },
  ],
};

export default lesson;
