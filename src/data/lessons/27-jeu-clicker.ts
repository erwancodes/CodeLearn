import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "27-jeu-clicker",
  moduleId: "module-7",
  title: "Atelier : le jeu du cliqueur",
  xp: 60,
  concept: {
    text: "Atelier JS : un clicker game avec score.",
    analogy: "Un clicker, c'est comme une tirelire : chaque clic ajoute une pièce.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: "pieces++; affichage.textContent = pieces;",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Le jeu du cliqueur",
    statement: `Ton premier **jeu** ! Clique le plus possible pour gagner des pièces.

Tu connais déjà tout : une variable \`pieces\`, un clic qui l'augmente, et l'affichage mis à jour. \`pieces++\` est un raccourci pour \`pieces = pieces + 1\`.

**À toi :**
1. Clique l'emoji pour gagner des pièces.
2. Fais grossir le bouton au clic (\`transform: scale\`) pour un effet « pop ».
3. Affiche un message « Niveau 2 ! » quand \`pieces\` atteint 20.
4. Bonus : ajoute un bouton « acheter » qui coûte des pièces.`,
    html: `<h1>Cliqueur</h1>
<p>Pièces : <span id="score">0</span></p>
<button id="cible">🪙</button>`,
    css: `body { text-align: center; font-family: sans-serif; }
#score { font-weight: 800; color: #f59e0b; font-size: 28px; }
#cible {
  font-size: 64px; background: #fff7ed; border: 3px solid #f59e0b;
  border-radius: 50%; width: 120px; height: 120px; cursor: pointer;
  transition: transform 0.1s ease;
}
#cible:active { transform: scale(0.9); }`,
    js: `let pieces = 0;
const score = document.getElementById("score");

document.getElementById("cible").addEventListener("click", function () {
  pieces++;
  score.textContent = pieces;
});`,
  },
};

export default lesson;
