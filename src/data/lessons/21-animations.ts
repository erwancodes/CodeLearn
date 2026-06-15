import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "21-animations",
  moduleId: "module-5",
  title: "Atelier : animations CSS",
  xp: 35,
  concept: {
    text: "Atelier pratique sur @keyframes.",
    analogy: "Une animation @keyframes, c'est un dessin animé : tu décris quelques images clés, le navigateur fait le reste.",
  },
  codeExample: {
    title: "Aperçu",
    language: "css",
    code: "@keyframes flotter { 50% { transform: translateY(-12px); } }",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Donne vie à ta page",
    statement: `Tu peux créer de vraies **animations** en CSS, sans JavaScript !

**Étape 1 — décrire l'animation** avec \`@keyframes\` : tu donnes des images clés (\`from\`/\`to\`, ou des pourcentages).
\`\`\`css
@keyframes flotter {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
\`\`\`

**Étape 2 — l'appliquer** à un élément :
\`\`\`css
.balle { animation: flotter 2s ease-in-out infinite; }
\`\`\`
\`2s\` = durée, \`infinite\` = en boucle sans fin.

**À toi :**
1. Regarde la balle flotter et le badge clignoter.
2. Change la durée (\`2s\` → \`1s\` ou \`4s\`).
3. Dans \`flotter\`, monte plus haut (\`-30px\`).
4. Crée ta propre animation (par ex. une rotation avec \`transform: rotate(360deg)\`).`,
    html: `<div class="balle"></div>

<span class="badge">NOUVEAU</span>`,
    css: `@keyframes flotter {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}

@keyframes clignoter {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.3; }
}

.balle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #06b6d4);
  animation: flotter 2s ease-in-out infinite;
}

.badge {
  display: inline-block;
  margin-top: 24px;
  background: #ef4444;
  color: white;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: bold;
  font-size: 13px;
  animation: clignoter 1.5s ease-in-out infinite;
}`,
  },
};

export default lesson;
