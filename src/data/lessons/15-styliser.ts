import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "15-styliser",
  moduleId: "module-4",
  title: "Mettre du style dans sa page",
  xp: 20,
  concept: {
    text: `Tu sais écrire du HTML (la structure) et du CSS (le style). Mais comment **relier** les deux dans une seule page ? Il y a plusieurs façons ; on va voir les deux plus utiles.

**1. La balise \`<style>\` (dans le head)**

On peut écrire tout le CSS dans une balise \`<style>\`, placée dans le \`<head>\` :

\`\`\`html
<head>
  <style>
    h1 { color: red; }
  </style>
</head>
\`\`\`

C'est exactement ce que tu utiliseras dans l'atelier : un bloc HTML + un bloc CSS, et le navigateur combine les deux.

**2. L'attribut \`style="..."\` (sur une balise)**

Pour un style rapide sur **un seul** élément, on peut écrire directement :

\`\`\`html
<p style="color: blue;">Texte bleu</p>
\`\`\`

Pratique pour un cas isolé, mais à éviter partout : c'est vite le bazar.

**Comment le CSS retrouve les éléments**

Le CSS vise les éléments par leur **sélecteur** :
- \`h1 { }\` → tous les \`<h1>\`
- \`.carte { }\` → les éléments \`class="carte"\`
- \`#titre { }\` → l'élément \`id="titre"\`

Donc dans ton HTML tu poses des classes (\`<div class="carte">\`), et dans ton CSS tu les stylises (\`.carte { ... }\`). C'est le duo gagnant.`,
    analogy:
      "Le HTML pose les meubles dans la maison et leur colle une étiquette (la classe). Le CSS, c'est le décorateur qui lit les étiquettes : « tous les meubles étiquetés *carte*, peignez-les en gris avec des coins arrondis ». Le HTML désigne, le CSS habille.",
  },
  codeExample: {
    title: "HTML + CSS reliés par une classe",
    language: "html",
    code: `<head>
  <style>
    .carte {
      background: #eef;
      padding: 16px;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="carte">
    <h2>Léa</h2>
    <p>15 ans, fan de code.</p>
  </div>
</body>`,
    output: `Une "carte" au fond bleu pâle, avec de l'espace
intérieur et des coins arrondis, contenant :
  Léa
  15 ans, fan de code.`,
  },
  examples: [
    {
      title: "Le CSS seul (ce que tu écriras dans le bloc CSS)",
      language: "css",
      code: `body {
  background: #fafafa;
  color: #333;
}
h1 {
  color: #e91e63;
  text-align: center;
}`,
      output: `Fond de page très clair, texte gris foncé,
et un titre h1 rose, centré.`,
    },
    {
      title: "Le style rapide sur une balise (à éviter en grand)",
      language: "html",
      code: `<p style="color: green; font-weight: bold;">
  Bravo !
</p>`,
      output: `Bravo !   (en vert et en gras)`,
    },
  ],
  quiz: [
    {
      question: "Dans quelle balise écrit-on du CSS directement dans la page ?",
      options: ["<css>", "<style>", "<script>", "<head>"],
      correctIndex: 1,
      explanation: "La balise `<style>` (placée dans le `<head>`) contient les règles CSS.",
    },
    {
      question: "Comment le CSS sait-il sur quels éléments s'appliquer ?",
      options: [
        "Au hasard",
        "Grâce aux sélecteurs (balise, classe, id)",
        "Toujours sur toute la page",
        "Il faut le préciser en JavaScript",
      ],
      correctIndex: 1,
      explanation:
        "Les sélecteurs (`h1`, `.carte`, `#titre`) indiquent au CSS quels éléments viser.",
    },
    {
      question: 'Comment cible-t-on en CSS les éléments `class="carte"` ?',
      options: ["carte", "#carte", ".carte", "*carte"],
      correctIndex: 2,
      explanation: "Une classe se cible avec un point : `.carte`.",
    },
    {
      question: 'Que fait `<p style="color: blue;">` ?',
      options: [
        "Met ce paragraphe précis en bleu",
        "Met tous les paragraphes en bleu",
        "Provoque une erreur",
        "Change la couleur de fond",
      ],
      correctIndex: 0,
      explanation:
        "L'attribut `style` applique le style uniquement à cet élément-là.",
    },
    {
      question: "Quelle est la bonne répartition des rôles ?",
      options: [
        "Le HTML habille, le CSS structure",
        "Le HTML structure et pose les classes, le CSS habille",
        "Les deux font la même chose",
        "Le CSS crée les balises",
      ],
      correctIndex: 1,
      explanation:
        "Le HTML décrit le contenu (et pose des classes) ; le CSS s'occupe de l'apparence.",
    },
  ],
};

export default lesson;
