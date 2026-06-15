import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "14-page-complete",
  moduleId: "module-4",
  title: "Une page web complète",
  xp: 20,
  concept: {
    text: `Tu connais déjà les balises HTML. Maintenant, on assemble tout pour faire une **vraie page web** complète, comme celles qu'un navigateur sait afficher.

Une page bien formée a toujours le même **squelette** :

\`\`\`html
<!doctype html>
<html>
  <head>
    <title>Mon site</title>
  </head>
  <body>
    ... le contenu visible ...
  </body>
</html>
\`\`\`

**Décortiquons ça**

- \`<!doctype html>\` : tout en haut, ça dit au navigateur « c'est une page HTML moderne ».
- \`<html>\` : la balise qui **entoure toute la page**.
- \`<head>\` : la partie **invisible** : le titre de l'onglet, les réglages… Ce n'est pas affiché dans la page elle-même.
- \`<title>\` : le texte affiché dans **l'onglet** du navigateur.
- \`<body>\` : le **corps** de la page, c'est-à-dire tout ce qu'on **voit** (titres, textes, images…).

**La règle d'or : head ≠ body**
- Ce qui doit s'**afficher** → dans le \`<body>\`.
- Les **réglages** et le titre de l'onglet → dans le \`<head>\`.

Dans l'atelier de ce module, tu écriras directement le contenu du \`<body>\` (le navigateur s'occupe du reste pour toi).`,
    analogy:
      "Une page web, c'est comme une lettre dans une enveloppe. Le `<head>`, c'est l'enveloppe : l'adresse, le timbre, les infos de service — utile mais on ne le lit pas comme le message. Le `<body>`, c'est la lettre elle-même : le vrai message que la personne va lire.",
  },
  codeExample: {
    title: "Le squelette complet d'une page",
    language: "html",
    code: `<!doctype html>
<html>
  <head>
    <title>Ma page perso</title>
  </head>
  <body>
    <h1>Salut !</h1>
    <p>Bienvenue sur mon site.</p>
  </body>
</html>`,
    output: `Onglet du navigateur : "Ma page perso"
Dans la page :
  Salut !            (grand titre)
  Bienvenue sur mon site.`,
  },
  examples: [
    {
      title: "Ce qui va dans le body (ce qu'on voit)",
      language: "html",
      code: `<body>
  <h1>Mon blog</h1>
  <h2>Mon premier article</h2>
  <p>Aujourd'hui, j'apprends le HTML !</p>
  <img src="photo.jpg">
</body>`,
      output: `Mon blog                 (grand titre)
Mon premier article      (sous-titre)
Aujourd'hui, j'apprends le HTML !
[image]`,
    },
    {
      title: "Le head : invisible mais utile",
      language: "html",
      code: `<head>
  <title>Cuisine de Léa</title>
</head>`,
      output: `Rien ne s'affiche DANS la page,
mais l'onglet du navigateur indique : "Cuisine de Léa"`,
    },
  ],
  quiz: [
    {
      question: "Dans quelle partie met-on ce qui doit s'AFFICHER dans la page ?",
      options: ["<head>", "<body>", "<title>", "<doctype>"],
      correctIndex: 1,
      explanation: "Tout le contenu visible (titres, textes, images) va dans le `<body>`.",
    },
    {
      question: "Que fait la balise `<title>` ?",
      options: [
        "Elle affiche un grand titre dans la page",
        "Elle définit le texte de l'onglet du navigateur",
        "Elle change la couleur",
        "Elle crée un lien",
      ],
      correctIndex: 1,
      explanation:
        "`<title>` (dans le `<head>`) donne le nom affiché dans l'onglet, pas dans la page.",
    },
    {
      question: "Que doit-on écrire tout en haut d'une page HTML moderne ?",
      options: ["<html>", "<!doctype html>", "<start>", "<body>"],
      correctIndex: 1,
      explanation:
        "`<!doctype html>` indique au navigateur qu'il s'agit d'une page HTML moderne.",
    },
    {
      question: "Quelle balise entoure toute la page ?",
      options: ["<body>", "<page>", "<html>", "<head>"],
      correctIndex: 2,
      explanation: "`<html>` englobe le `<head>` et le `<body>` : c'est l'enveloppe de toute la page.",
    },
    {
      question: "Le contenu du `<head>` est-il visible dans la page ?",
      options: [
        "Oui, en haut de la page",
        "Non, ce sont des réglages (sauf le titre de l'onglet)",
        "Oui, mais en petit",
        "Seulement sur mobile",
      ],
      correctIndex: 1,
      explanation:
        "Le `<head>` contient des informations de service ; il ne s'affiche pas dans la page (le `<title>` apparaît dans l'onglet).",
    },
  ],
};

export default lesson;
