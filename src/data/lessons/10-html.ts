import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "10-html",
  moduleId: "module-3",
  title: "HTML de base",
  xp: 20,
  concept: {
    text: `Toutes les pages web que tu visites sont écrites en **HTML**. C'est le langage qui décrit la **structure** et le **contenu** d'une page : les titres, les paragraphes, les images, les liens…

Le HTML est fait de **balises**, écrites entre chevrons \`< >\`.

**Des balises par paires**

La plupart des balises vont par deux : une **ouvrante** et une **fermante** (avec un \`/\`). Le contenu se place entre les deux.

\`\`\`html
<p>Ceci est un paragraphe.</p>
\`\`\`

Ici \`<p>\` ouvre le paragraphe et \`</p>\` le ferme.

**Les balises essentielles**

- \`<h1>\` à \`<h6>\` : les **titres** (h1 = le plus gros, h6 = le plus petit)
- \`<p>\` : un **paragraphe** de texte
- \`<a href="...">\` : un **lien** cliquable
- \`<ul>\` et \`<li>\` : une **liste à puces** (ul = la liste, li = chaque élément)
- \`<img src="...">\` : une **image** (balise seule, sans fermeture)
- \`<strong>\` : du texte **important** (en gras)

**Les attributs**

Certaines balises ont des **attributs** qui donnent des infos en plus, sous la forme \`nom="valeur"\`. Par exemple, \`href\` indique l'adresse d'un lien :

\`\`\`html
<a href="https://exemple.fr">Clique ici</a>
\`\`\``,
    analogy:
      "Le HTML, c'est le squelette d'une maison : les murs, les pièces, les portes, les fenêtres. Il dit CE QUI existe et où, mais pas encore les couleurs ni la déco. La déco, ce sera le CSS (prochaine leçon).",
  },
  codeExample: {
    title: "Une mini page web",
    language: "html",
    code: `<h1>Ma première page</h1>
<p>Bonjour et <strong>bienvenue</strong> !</p>
<ul>
  <li>Pomme</li>
  <li>Banane</li>
</ul>
<a href="https://exemple.fr">Mon lien</a>`,
    output: `Ma première page          (grand titre)
Bonjour et bienvenue !    (bienvenue est en gras)
• Pomme
• Banane
Mon lien                  (texte cliquable)`,
  },
  examples: [
    {
      title: "Des titres de tailles différentes",
      language: "html",
      code: `<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Un peu de texte sous les titres.</p>`,
      output: `Titre principal   (très gros)
Sous-titre        (moyen)
Un peu de texte sous les titres.`,
    },
    {
      title: "Une image avec un lien",
      language: "html",
      code: `<img src="chat.jpg">
<p>Voici mon chat. <a href="chat.jpg">Voir en grand</a></p>`,
      output: `[image du chat]
Voici mon chat. Voir en grand   (lien cliquable)`,
    },
  ],
  quiz: [
    {
      question: "À quoi sert le HTML ?",
      options: [
        "À choisir les couleurs",
        "À décrire la structure et le contenu d'une page",
        "À rendre la page interactive",
        "À stocker des données",
      ],
      correctIndex: 1,
      explanation:
        "Le HTML définit la structure et le contenu. Le style vient du CSS, l'interactivité du JavaScript.",
    },
    {
      question: "Comment ferme-t-on correctement une balise `<p>` ?",
      options: ["<p/>", "</p>", "<\\p>", "<p end>"],
      correctIndex: 1,
      explanation: "On ferme une balise avec un slash devant le nom : `</p>`.",
    },
    {
      question: "Quelle balise crée un lien cliquable ?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctIndex: 1,
      explanation: 'La balise `<a href="...">` crée un lien hypertexte.',
    },
    {
      question: "Quelle balise affiche le plus gros titre ?",
      options: ["<h6>", "<h1>", "<title>", "<big>"],
      correctIndex: 1,
      explanation: "`<h1>` est le titre le plus important (et le plus gros). `<h6>` est le plus petit.",
    },
    {
      question: 'Dans `<a href="https://exemple.fr">`, que représente `href` ?',
      options: [
        "Le texte affiché",
        "Un attribut qui donne l'adresse du lien",
        "Une erreur",
        "La couleur du lien",
      ],
      correctIndex: 1,
      explanation:
        "`href` est un attribut : il précise vers quelle adresse pointe le lien.",
    },
  ],
};

export default lesson;
