import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "19-boutons-hover",
  moduleId: "module-5",
  title: "Atelier : boutons & effets au survol",
  xp: 30,
  concept: {
    text: "Atelier pratique sur :hover et les transitions.",
    analogy: "Une transition, c'est le fondu entre deux états, comme un variateur de lumière.",
  },
  codeExample: {
    title: "Aperçu",
    language: "css",
    code: ".btn:hover { transform: translateY(-3px); }",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Des boutons qui réagissent au survol",
    statement: `Un bon bouton **réagit** quand la souris passe dessus. Deux ingrédients :

- \`:hover\` — un état spécial qui s'active **au survol**. Tu écris \`.btn:hover { ... }\` pour dire « quand on survole, applique ça ».
- \`transition\` — rend le changement **fluide** au lieu d'être brutal. \`transition: all 0.2s ease;\`

Et pour bouger sans casser la mise en page, on utilise \`transform\` :
- \`transform: translateY(-3px)\` → monte un peu.
- \`transform: scale(1.05)\` → grossit légèrement.

**À toi :**
1. Survole les boutons pour voir l'effet.
2. Change la couleur au survol (\`background\`).
3. Essaie \`transform: scale(1.1)\` sur \`.btn:hover\`.
4. Crée un 3e bouton avec ton propre style.`,
    html: `<h1>Mes boutons</h1>

<button class="btn">Cliquer</button>
<button class="btn btn-ghost">En savoir plus</button>`,
    css: `.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #1d4ed8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.btn-ghost {
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.btn-ghost:hover {
  background: #eff6ff;
}`,
  },
};

export default lesson;
