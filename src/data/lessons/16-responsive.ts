import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "16-responsive",
  moduleId: "module-4",
  title: "Un site adapté au mobile",
  xp: 25,
  concept: {
    text: `La plupart des gens visitent les sites sur leur **téléphone**. Un bon site doit donc être **lisible sur un petit écran** comme sur un grand : on dit qu'il est **responsive** (adaptatif).

**1. La balise viewport (indispensable)**

Sans elle, un iPhone affiche ton site tout petit, comme une mini page dézoomée. On l'ajoute dans le \`<head>\` :

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

Ça dit au téléphone : « adapte la largeur à l'écran ». (Dans l'atelier, c'est déjà fait pour toi !)

**2. Éviter les tailles fixes en pixels**

Une largeur \`width: 600px\` déborde sur un petit écran. Préfère :
- des **pourcentages** : \`width: 100%\` (prend toute la largeur dispo)
- une largeur **maximale** : \`max-width: 600px\` (grand sur PC, mais jamais plus large que l'écran)

**3. Les images flexibles**

\`\`\`css
img { max-width: 100%; }
\`\`\`

Comme ça, une image ne dépasse jamais de l'écran.

**4. Les media queries : changer le style selon la taille**

Une *media query* applique du CSS **seulement** si l'écran respecte une condition :

\`\`\`css
@media (max-width: 600px) {
  body { font-size: 14px; }
}
\`\`\`

Ici : « si l'écran fait 600px de large ou moins (un mobile), réduis la taille du texte ».

Astuce : utilise le bouton **Mobile** de l'atelier pour vérifier le rendu sur un écran d'iPhone !`,
    analogy:
      "Un site responsive, c'est comme de l'eau : elle prend la forme du verre dans lequel on la verse. Verre large (un PC) ou petit verre (un iPhone), le contenu s'adapte au lieu de déborder. Les media queries, c'est dire « si le verre est petit, sers différemment ».",
  },
  codeExample: {
    title: "Une carte qui s'adapte à l'écran",
    language: "css",
    code: `.carte {
  width: 100%;
  max-width: 500px;   /* grand sur PC, jamais trop large */
  margin: 0 auto;     /* centrée */
}

img {
  max-width: 100%;    /* l'image ne déborde jamais */
}`,
    output: `Sur PC : la carte fait 500px, centrée.
Sur iPhone : elle prend toute la largeur de l'écran,
sans déborder.`,
  },
  examples: [
    {
      title: "Une media query pour le mobile",
      language: "css",
      code: `h1 {
  font-size: 48px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 28px;   /* plus petit sur mobile */
  }
}`,
      output: `Sur grand écran : titre de 48px.
Sur mobile (≤ 600px) : titre réduit à 28px.`,
    },
    {
      title: "La balise viewport (dans le head)",
      language: "html",
      code: `<head>
  <meta name="viewport"
        content="width=device-width, initial-scale=1">
  <title>Mon site mobile</title>
</head>`,
      output: `Le site s'affiche à la bonne taille sur iPhone,
au lieu d'apparaître minuscule et dézoomé.`,
    },
  ],
  quiz: [
    {
      question: "Que veut dire qu'un site est « responsive » ?",
      options: [
        "Il répond vite",
        "Il s'adapte à la taille de l'écran (mobile comme PC)",
        "Il a beaucoup de couleurs",
        "Il fonctionne sans Internet",
      ],
      correctIndex: 1,
      explanation:
        "Un site responsive s'adapte à toutes les tailles d'écran pour rester lisible.",
    },
    {
      question: "Pourquoi ajoute-t-on la balise viewport ?",
      options: [
        "Pour que le site s'affiche à la bonne taille sur mobile",
        "Pour changer la couleur",
        "Pour ajouter une image",
        "Ça ne sert à rien",
      ],
      correctIndex: 0,
      explanation:
        "Sans la balise viewport, un téléphone affiche le site dézoomé et illisible.",
    },
    {
      question: "Quelle largeur est la plus adaptée au mobile ?",
      options: ["width: 900px", "width: 100%", "width: 1200px", "width: 800px"],
      correctIndex: 1,
      explanation:
        "Un pourcentage comme `100%` s'adapte à l'écran ; une grande valeur fixe en pixels déborde.",
    },
    {
      question: "À quoi sert `@media (max-width: 600px) { ... }` ?",
      options: [
        "À appliquer ce CSS seulement sur les petits écrans",
        "À cacher le site sur mobile",
        "À agrandir toutes les images",
        "À créer un lien",
      ],
      correctIndex: 0,
      explanation:
        "Une media query applique son CSS uniquement quand la condition est remplie (ici : écran ≤ 600px).",
    },
    {
      question: "Que fait `img { max-width: 100%; }` ?",
      options: [
        "Rend toutes les images énormes",
        "Empêche les images de dépasser la largeur de l'écran",
        "Supprime les images",
        "Centre les images",
      ],
      correctIndex: 1,
      explanation:
        "`max-width: 100%` garantit qu'une image ne sera jamais plus large que son conteneur / l'écran.",
    },
  ],
};

export default lesson;
