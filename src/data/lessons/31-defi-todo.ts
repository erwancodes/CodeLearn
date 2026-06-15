import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "31-defi-todo",
  moduleId: "module-8",
  title: "Défi : une liste de tâches",
  xp: 160,
  concept: {
    text: "Défi JS : ajouter dynamiquement des éléments dans la page.",
    analogy: "createElement, c'est fabriquer une nouvelle brique et la poser dans le mur.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: 'const li = document.createElement("li"); liste.appendChild(li);',
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Ta to-do list interactive",
    statement: `Une vraie appli mini : on tape une tâche, on l'ajoute à la liste, et on peut cocher/supprimer.

Nouveauté : **créer des éléments** en JS et les ajouter à la page.
\`\`\`js
const li = document.createElement("li");
li.textContent = champ.value;
liste.appendChild(li);
\`\`\`

**À toi :**
1. Ajoute quelques tâches dans l'aperçu.
2. Fais qu'un **clic sur une tâche** la barre (\`textDecoration\` ou une classe).
3. Vide le champ après l'ajout (\`champ.value = ""\`).
4. Bonus : un bouton « tout effacer ».`,
    html: `<h1>Mes tâches</h1>
<input id="champ" placeholder="Nouvelle tâche..." />
<button id="ajouter">Ajouter</button>
<ul id="liste"></ul>`,
    css: `body { font-family: sans-serif; max-width: 420px; margin: 0 auto; }
input {
  padding: 10px; border: 2px solid #cbd5e1; border-radius: 10px; font-size: 15px;
}
button {
  padding: 10px 16px; border: none; border-radius: 10px;
  background: #2563eb; color: white; font-weight: 600; cursor: pointer;
}
ul { list-style: none; padding: 0; margin-top: 16px; }
li {
  background: #f1f5f9; padding: 12px 14px; border-radius: 12px;
  margin-bottom: 8px; cursor: pointer;
}`,
    js: `const champ = document.getElementById("champ");
const liste = document.getElementById("liste");

document.getElementById("ajouter").addEventListener("click", function () {
  if (champ.value === "") return;
  const li = document.createElement("li");
  li.textContent = champ.value;
  liste.appendChild(li);
});`,
  },
};

export default lesson;
