import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "26-js-projet",
  moduleId: "module-6",
  title: "Projet : générateur de phrases",
  xp: 170,
  concept: {
    text: "Projet JS : piocher un élément au hasard dans une liste.",
    analogy: "Math.random, c'est un dé : il sort un nombre au hasard à chaque lancer.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: "phrases[Math.floor(Math.random() * phrases.length)]",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Générateur de phrases au hasard",
    statement: `Premier vrai mini-projet interactif ! Un bouton qui affiche une **phrase au hasard** parmi une liste.

Le secret : piocher au hasard dans un **tableau**.
\`\`\`js
const i = Math.floor(Math.random() * phrases.length);
const choisie = phrases[i];
\`\`\`
\`Math.random()\` donne un nombre entre 0 et 1, qu'on multiplie par la taille de la liste, puis \`Math.floor\` arrondit pour obtenir un indice valide.

**À toi :**
1. Clique pour générer des phrases.
2. Ajoute **tes propres phrases** dans le tableau \`phrases\`.
3. Change la couleur de fond aussi au hasard (bonus).
4. Ajoute un compteur du nombre de clics.`,
    html: `<h1>Ta dose de motivation</h1>
<p id="sortie">Clique pour commencer !</p>
<button id="go">Nouvelle phrase</button>`,
    css: `body { text-align: center; font-family: sans-serif; padding-top: 30px; }
#sortie {
  font-size: 22px; font-weight: 700; color: #2563eb;
  min-height: 60px; max-width: 360px; margin: 16px auto;
}
button {
  background: #2563eb; color: white; border: none;
  padding: 14px 24px; border-radius: 999px; font-size: 16px; cursor: pointer;
}`,
    js: `const phrases = [
  "Tu progresses à chaque ligne de code.",
  "Une erreur, c'est juste une étape.",
  "Code aujourd'hui, fier demain.",
  "Petit à petit, le bug s'efface.",
];

const sortie = document.getElementById("sortie");

document.getElementById("go").addEventListener("click", function () {
  const i = Math.floor(Math.random() * phrases.length);
  sortie.textContent = phrases[i];
});`,
  },
};

export default lesson;
