import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "10-html",
  moduleId: "module-3",
  title: "HTML de base",
  xp: 20,
  concept: {
    text: `Le **HTML** est le langage qui décrit la **structure** d'une page web. Il est fait de **balises** entourées de chevrons \`< >\`.

La plupart vont par paire : une ouvrante \`<p>\` et une fermante \`</p>\`.

Balises essentielles :
- \`<h1>\` à \`<h6>\` : titres
- \`<p>\` : paragraphe
- \`<a href="...">\` : lien
- \`<ul>\` / \`<li>\` : liste à puces
- \`<img src="...">\` : image`,
    analogy:
      "Le HTML, c'est le squelette d'une maison : les murs, les pièces, les portes. Il définit ce qui existe, pas encore la déco (ça, c'est le CSS).",
  },
  codeExample: {
    language: "html",
    code: `<h1>Ma première page</h1>
<p>Bonjour et bienvenue !</p>
<ul>
  <li>Pomme</li>
  <li>Banane</li>
</ul>
<a href="https://exemple.fr">Mon lien</a>`,
    output: `Ma première page  (grand titre)
Bonjour et bienvenue !
• Pomme
• Banane
Mon lien  (cliquable)`,
  },
  quiz: [
    {
      question: "À quoi sert le HTML ?",
      options: [
        "À styliser les couleurs",
        "À décrire la structure d'une page",
        "À rendre la page interactive",
        "À stocker des données",
      ],
      correctIndex: 1,
      explanation:
        "Le HTML définit la structure et le contenu. Le style vient du CSS, l'interactivité du JavaScript.",
    },
    {
      question: "Comment fermer correctement une balise `<p>` ?",
      options: ["<p/>", "</p>", "<\\p>", "<p end>"],
      correctIndex: 1,
      explanation: "On ferme une balise avec un slash : `</p>`.",
    },
    {
      question: "Quelle balise crée un lien cliquable ?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctIndex: 1,
      explanation: "La balise `<a href=\"...\">` crée un lien hypertexte.",
    },
  ],
};

export default lesson;
