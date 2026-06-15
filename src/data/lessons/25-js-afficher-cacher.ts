import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "25-js-afficher-cacher",
  moduleId: "module-6",
  title: "Atelier : afficher / cacher",
  xp: 45,
  concept: {
    text: "Atelier JS : montrer ou masquer un élément avec classList.toggle.",
    analogy: "classList.toggle, c'est un interrupteur : on appuie, c'est allumé ; on rappuie, c'est éteint.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: 'boite.classList.toggle("cachee")',
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Un panneau qui s'ouvre et se ferme",
    statement: `Beaucoup d'interfaces affichent ou cachent des choses (menus, réponses, détails). En JS, le plus simple est de **basculer une classe CSS**.

\`\`\`js
element.classList.toggle("cachee");
\`\`\`
\`toggle\` ajoute la classe si elle n'est pas là, et l'enlève si elle y est. Côté CSS, la classe \`.cachee\` met \`display: none\`.

**À toi :**
1. Clique pour ouvrir/fermer le panneau.
2. Change le texte du bouton selon l'état (« Voir » / « Cacher »).
3. Change le contenu du panneau.
4. Ajoute un 2e panneau indépendant.`,
    html: `<button id="bouton">Voir la réponse</button>

<div id="panneau" class="cachee">
  <p>Surprise ! Voici le contenu caché.</p>
</div>`,
    css: `body { text-align: center; font-family: sans-serif; }
button {
  background: #2563eb; color: white; border: none;
  padding: 12px 22px; border-radius: 999px; cursor: pointer; font-size: 16px;
}
#panneau {
  margin: 20px auto; max-width: 300px;
  background: #eff6ff; border-radius: 16px; padding: 16px;
}
.cachee { display: none; }`,
    js: `const bouton = document.getElementById("bouton");
const panneau = document.getElementById("panneau");

bouton.addEventListener("click", function () {
  panneau.classList.toggle("cachee");
});`,
  },
};

export default lesson;
