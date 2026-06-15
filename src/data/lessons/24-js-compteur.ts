import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "24-js-compteur",
  moduleId: "module-6",
  title: "Atelier : un compteur",
  xp: 45,
  concept: {
    text: "Atelier JS : un compteur avec variable et mise à jour de l'affichage.",
    analogy: "Une variable qui compte, c'est le score affiché sur un tableau de marque.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: "score = score + 1; affichage.textContent = score;",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Construis un compteur",
    statement: `On combine une **variable** et le **clic** pour faire un compteur.

L'idée :
- une variable \`score\` garde le nombre en mémoire ;
- à chaque clic, on la modifie (\`score + 1\` ou \`score - 1\`) ;
- on **réaffiche** la nouvelle valeur dans la page.

**À toi :**
1. Teste les boutons + et −.
2. Ajoute un bouton **« Réinitialiser »** qui remet \`score\` à 0.
3. Empêche le score de descendre sous 0 (avec un \`if\`).
4. Change le message quand le score dépasse 10.`,
    html: `<h1>Compteur</h1>
<div id="affichage">0</div>
<button id="moins">−</button>
<button id="plus">+</button>`,
    css: `body { text-align: center; font-family: sans-serif; }
#affichage {
  font-size: 64px;
  font-weight: 800;
  color: #2563eb;
  margin: 16px 0;
}
button {
  font-size: 24px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 16px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  margin: 0 6px;
}`,
    js: `let score = 0;
const affichage = document.getElementById("affichage");

document.getElementById("plus").addEventListener("click", function () {
  score = score + 1;
  affichage.textContent = score;
});

document.getElementById("moins").addEventListener("click", function () {
  score = score - 1;
  affichage.textContent = score;
});`,
  },
};

export default lesson;
