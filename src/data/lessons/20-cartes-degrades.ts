import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "20-cartes-degrades",
  moduleId: "module-5",
  title: "Atelier : ombres & dégradés",
  xp: 35,
  concept: {
    text: "Atelier pratique sur box-shadow et les dégradés.",
    analogy: "Une ombre donne du relief, comme un objet posé au-dessus de la feuille.",
  },
  codeExample: {
    title: "Aperçu",
    language: "css",
    code: "background: linear-gradient(135deg, #2563eb, #06b6d4);",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Des cartes qui ont du style",
    statement: `Deux techniques qui changent tout pour un design pro :

**Les dégradés** (\`linear-gradient\`)
\`\`\`css
background: linear-gradient(135deg, #2563eb, #06b6d4);
\`\`\`
\`135deg\` est l'angle, puis les couleurs de départ et d'arrivée.

**Les ombres** (\`box-shadow\`)
\`\`\`css
box-shadow: 0 20px 40px rgba(0,0,0,0.15);
\`\`\`
Dans l'ordre : décalage horizontal, vertical, flou, puis la couleur (le \`rgba\` permet la transparence).

**À toi :**
1. Change les couleurs du dégradé de la bannière.
2. Modifie l'angle (\`135deg\` → \`90deg\` ou \`45deg\`).
3. Rends l'ombre de la carte plus ou moins forte.
4. Ajoute un dégradé en fond de page (\`body\`).`,
    html: `<div class="banniere">
  <h1>Mon profil</h1>
</div>

<div class="carte">
  <h2>Une carte élégante</h2>
  <p>Avec une ombre douce et des coins arrondis.</p>
</div>`,
    css: `.banniere {
  background: linear-gradient(135deg, #2563eb, #06b6d4);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

.carte {
  background: white;
  margin-top: 20px;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

h1, h2 { margin: 0 0 8px; }
p { color: #64748b; margin: 0; }`,
  },
};

export default lesson;
