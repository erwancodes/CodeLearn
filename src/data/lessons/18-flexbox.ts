import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "18-flexbox",
  moduleId: "module-5",
  title: "Atelier : aligner avec Flexbox",
  xp: 30,
  concept: {
    text: "Atelier pratique sur Flexbox.",
    analogy: "Flexbox range tes éléments comme des livres sur une étagère.",
  },
  codeExample: {
    title: "Aperçu",
    language: "css",
    code: ".rangee { display: flex; gap: 12px; }",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Aligner des éléments avec Flexbox",
    statement: `**Flexbox** est l'outil n°1 pour placer des éléments où tu veux : côte à côte, centrés, espacés…

Tu mets \`display: flex\` sur le **conteneur** (le parent), et ses enfants se rangent automatiquement.

Les réglages magiques :
- \`justify-content\` : aligne **horizontalement** — essaie \`center\`, \`space-between\`, \`flex-end\`.
- \`align-items\` : aligne **verticalement** — essaie \`center\`, \`stretch\`.
- \`gap\` : l'espace entre les éléments.
- \`flex-direction: column\` : empile **en colonne** au lieu d'une ligne.

**À toi :**
1. Change \`justify-content\` et observe les 3 boîtes bouger.
2. Passe en \`flex-direction: column\`.
3. Ajoute une 4e boîte dans le HTML.`,
    html: `<h1>Ma rangée</h1>

<div class="rangee">
  <div class="boite">1</div>
  <div class="boite">2</div>
  <div class="boite">3</div>
</div>`,
    css: `.rangee {
  display: flex;
  justify-content: center;   /* center | space-between | flex-end */
  align-items: center;
  gap: 12px;
  background: #f1f5f9;
  padding: 24px;
  border-radius: 16px;
}

.boite {
  background: #2563eb;
  color: white;
  padding: 24px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
}`,
  },
};

export default lesson;
