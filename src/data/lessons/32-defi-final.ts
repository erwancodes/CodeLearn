import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "32-defi-final",
  moduleId: "module-8",
  title: "Défi final : ton site interactif",
  xp: 500,
  concept: {
    text: "Défi final : un site complet, stylé et interactif.",
    analogy: "C'est ton chef-d'œuvre de fin de parcours : tout ce que tu sais, réuni.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: 'document.body.classList.toggle("sombre");',
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Ton site interactif complet",
    statement: `Le boss final ! Une page de présentation **stylée ET interactive**, qui réunit tout : structure, Flexbox, dégradés, animations, et JavaScript.

Le code de départ inclut déjà un **bouton mode sombre** (qui bascule une classe sur \`body\`). C'est ta base : fais-en un site dont tu es fier.

**Défis (vise haut) :**
1. Mets **tes** infos : nom, présentation, projets.
2. Personnalise les couleurs des modes clair **et** sombre.
3. Ajoute un bouton qui affiche un message au clic (ou un compteur de visites).
4. Ajoute une **animation** sur le titre (rappel : \`@keyframes\`).
5. Vérifie le rendu en **Mobile** 📱.

Quand c'est prêt, clique sur « Marquer comme terminé ». Tu as bouclé le parcours — chapeau !`,
    html: `<header>
  <h1 id="titre">Sam Dev</h1>
  <button id="theme">Mode sombre</button>
</header>

<main>
  <p class="intro">Apprenti développeur. J'adore créer des pages web.</p>

  <div class="cartes">
    <div class="carte">Projet 1</div>
    <div class="carte">Projet 2</div>
    <div class="carte">Projet 3</div>
  </div>

  <button id="hello">Dis bonjour</button>
  <p id="message"></p>
</main>`,
    css: `body {
  font-family: sans-serif; margin: 0; padding: 24px;
  background: #f8fafc; color: #0f172a;
  transition: background 0.3s ease, color 0.3s ease;
}
body.sombre { background: #0f172a; color: #e2e8f0; }

header { display: flex; justify-content: space-between; align-items: center; }
#titre {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
#theme, #hello {
  border: none; border-radius: 999px; padding: 10px 18px;
  background: #2563eb; color: white; font-weight: 600; cursor: pointer;
}
.intro { color: #64748b; }
body.sombre .intro { color: #94a3b8; }

.cartes { display: flex; flex-wrap: wrap; gap: 14px; margin: 20px 0; }
.carte {
  flex: 1 1 140px; padding: 30px; border-radius: 18px;
  background: linear-gradient(135deg, #2563eb, #06b6d4); color: white;
  font-weight: 700; text-align: center;
}
#message { font-weight: 700; color: #2563eb; }`,
    js: `document.getElementById("theme").addEventListener("click", function () {
  document.body.classList.toggle("sombre");
});

document.getElementById("hello").addEventListener("click", function () {
  document.getElementById("message").textContent = "Bonjour et bienvenue !";
});`,
  },
};

export default lesson;
