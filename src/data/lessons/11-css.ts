import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "11-css",
  moduleId: "module-3",
  title: "CSS et mise en page",
  xp: 20,
  concept: {
    text: `Le HTML construit le squelette d'une page, mais tout est gris et moche par défaut. Le **CSS** sert à le **décorer** : couleurs, tailles, polices, espacements, mise en page…

**Une règle CSS**

Une règle dit : « pour tel élément, applique tel style ». Elle a trois parties :

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
}
\`\`\`

- \`h1\` : le **sélecteur** (quels éléments on vise)
- \`color\`, \`font-size\` : les **propriétés** (ce qu'on change)
- \`blue\`, \`32px\` : les **valeurs**

Chaque ligne se termine par un point-virgule \`;\` et tout est entre accolades \`{ }\`.

**Cibler les éléments (les sélecteurs)**

- par **balise** : \`p { }\` → tous les paragraphes
- par **classe** : \`.bouton { }\` → tous les éléments \`class="bouton"\` (avec un point)
- par **identifiant** : \`#menu { }\` → l'élément \`id="menu"\` (avec un dièse)

**Quelques propriétés utiles**

- \`color\` : couleur du texte
- \`background\` : couleur de fond
- \`font-size\` : taille du texte
- \`text-align\` : alignement (left, center, right)
- \`padding\` : espace **intérieur**
- \`margin\` : espace **extérieur**`,
    analogy:
      "Si le HTML est le squelette de la maison, le CSS est la décoration : la peinture des murs, la taille des meubles, leur disposition. Même maison, mais avec le CSS tu peux la transformer complètement sans toucher aux murs.",
  },
  codeExample: {
    title: "Styliser un titre et une carte",
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
de l'espace intérieur et des coins arrondis.`,
  },
  examples: [
    {
      title: "Changer la couleur de tous les paragraphes",
      language: "css",
      code: `p {
  color: gray;
  font-size: 18px;
}`,
      output: `Tous les paragraphes deviennent gris,
avec un texte de 18 pixels.`,
    },
    {
      title: "Un bouton coloré (par sa classe)",
      language: "css",
      code: `.bouton {
  background: green;
  color: white;
  padding: 10px;
}`,
      output: `Chaque élément class="bouton" a un fond vert,
un texte blanc et de l'espace autour du texte.`,
    },
  ],
  quiz: [
    {
      question: "À quoi sert le CSS ?",
      options: [
        "À structurer le contenu",
        "À styliser l'apparence",
        "À calculer des données",
        "À gérer une base de données",
      ],
      correctIndex: 1,
      explanation: "Le CSS gère l'apparence : couleurs, tailles, positions, espacements.",
    },
    {
      question: 'Comment cible-t-on un élément ayant `class="carte"` ?',
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
    {
      question: "Par quoi se termine chaque ligne de propriété en CSS ?",
      options: ["une virgule ,", "un point-virgule ;", "un point .", "rien"],
      correctIndex: 1,
      explanation: "Chaque déclaration se termine par un point-virgule `;`.",
    },
    {
      question: "Quelle propriété ajoute de l'espace À L'INTÉRIEUR d'un élément ?",
      options: ["margin", "padding", "border", "space"],
      correctIndex: 1,
      explanation:
        "`padding` est l'espace intérieur ; `margin` est l'espace extérieur (autour).",
    },
  ],
};

export default lesson;
