import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "28-jeu-quiz",
  moduleId: "module-7",
  title: "Atelier : un quiz qui réagit",
  xp: 70,
  concept: {
    text: "Atelier JS : vérifier une réponse avec une condition.",
    analogy: "Le jeu joue à l'arbitre : il compare ta réponse à la bonne et tranche.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: 'if (reponse === "Paris") { ... } else { ... }',
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Construis ton quiz",
    statement: `Un mini-quiz : on clique une réponse, le JS dit si c'est juste avec un \`if\`.

Chaque bouton appelle la fonction \`repondre(...)\` en lui passant sa valeur. La fonction **compare** avec la bonne réponse :
\`\`\`js
function repondre(choix) {
  if (choix === "Paris") { ... } else { ... }
}
\`\`\`

**À toi :**
1. Réponds à la question dans l'aperçu.
2. Change la question et les réponses (et la bonne dans le \`if\`).
3. Garde un **score** des bonnes réponses.
4. Bonus : ajoute une 2e question.`,
    html: `<h1>Quiz</h1>
<p>Quelle est la capitale de la France ?</p>
<button onclick="repondre('Lyon')">Lyon</button>
<button onclick="repondre('Paris')">Paris</button>
<button onclick="repondre('Nice')">Nice</button>
<p id="resultat"></p>`,
    css: `body { text-align: center; font-family: sans-serif; }
button {
  display: inline-block; margin: 6px;
  background: #eff6ff; color: #1e3a8a; border: 2px solid #bfdbfe;
  padding: 12px 18px; border-radius: 12px; font-size: 16px; cursor: pointer;
}
button:hover { background: #dbeafe; }
#resultat { font-size: 22px; font-weight: 700; margin-top: 16px; }`,
    js: `const resultat = document.getElementById("resultat");

function repondre(choix) {
  if (choix === "Paris") {
    resultat.textContent = "Bonne réponse !";
    resultat.style.color = "green";
  } else {
    resultat.textContent = "Raté, essaie encore.";
    resultat.style.color = "tomato";
  }
}`,
  },
};

export default lesson;
