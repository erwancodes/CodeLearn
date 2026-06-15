import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "23-js-clic",
  moduleId: "module-6",
  title: "Atelier : réagir à un clic",
  xp: 40,
  concept: {
    text: "Atelier JS : écouter un clic et changer le texte.",
    analogy: "addEventListener, c'est une oreille qui attend qu'un événement arrive pour réagir.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: 'btn.addEventListener("click", () => { ... })',
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Ta page réagit au clic",
    statement: `Le **JavaScript** rend ta page interactive. Nouveauté : l'onglet **JS** est apparu !

Trois gestes de base :
1. **Attraper** un élément du HTML grâce à son \`id\` :
\`\`\`js
const titre = document.getElementById("titre");
\`\`\`
2. **Écouter** un événement (ici le clic) :
\`\`\`js
btn.addEventListener("click", function () { ... });
\`\`\`
3. **Modifier** la page, par exemple le texte :
\`\`\`js
titre.textContent = "Nouveau texte";
\`\`\`

**À toi :**
1. Clique sur le bouton dans l'aperçu : le titre change.
2. Change le texte affiché après le clic.
3. Change aussi la couleur : \`titre.style.color = "tomato";\`
4. Ajoute un 2e bouton avec son propre effet.`,
    html: `<h1 id="titre">Clique sur le bouton</h1>
<button id="btn">Clique-moi</button>`,
    css: `body { text-align: center; font-family: sans-serif; }
h1 { color: #2563eb; }
button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
}`,
    js: `const btn = document.getElementById("btn");
const titre = document.getElementById("titre");

btn.addEventListener("click", function () {
  titre.textContent = "Bravo, ça marche !";
  titre.style.color = "green";
});`,
  },
};

export default lesson;
