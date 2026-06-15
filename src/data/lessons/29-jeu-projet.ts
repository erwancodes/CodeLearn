import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "29-jeu-projet",
  moduleId: "module-7",
  title: "Projet : pierre-feuille-ciseaux",
  xp: 220,
  concept: {
    text: "Projet JS : un vrai jeu contre l'ordinateur.",
    analogy: "L'ordinateur joue au hasard, puis on compare les deux coups comme un arbitre.",
  },
  codeExample: {
    title: "Aperçu",
    language: "javascript",
    code: "const ordi = coups[Math.floor(Math.random() * 3)];",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Pierre – Feuille – Ciseaux",
    statement: `Un vrai petit jeu contre l'ordinateur ! Tu choisis, l'ordi tire au hasard, le JS désigne le gagnant.

La logique combine tout ce que tu sais : un **tableau** de coups, un tirage **au hasard**, des **conditions** pour comparer, et l'**affichage** du résultat.

**À toi :**
1. Joue quelques parties dans l'aperçu.
2. Affiche aussi le coup choisi par l'ordinateur.
3. Garde le **score** (toi vs ordi) à l'écran.
4. Bonus : ajoute une animation ou un emoji selon le résultat.`,
    html: `<h1>Pierre · Feuille · Ciseaux</h1>
<button onclick="jouer('pierre')">Pierre</button>
<button onclick="jouer('feuille')">Feuille</button>
<button onclick="jouer('ciseaux')">Ciseaux</button>
<p id="resultat">Choisis ton coup !</p>`,
    css: `body { text-align: center; font-family: sans-serif; }
button {
  margin: 6px; background: #2563eb; color: white; border: none;
  padding: 12px 20px; border-radius: 12px; font-size: 16px; cursor: pointer;
}
button:hover { background: #1d4ed8; }
#resultat { font-size: 22px; font-weight: 700; margin-top: 20px; }`,
    js: `const coups = ["pierre", "feuille", "ciseaux"];
const resultat = document.getElementById("resultat");

function jouer(monCoup) {
  const ordi = coups[Math.floor(Math.random() * 3)];

  if (monCoup === ordi) {
    resultat.textContent = "Égalité ! (" + ordi + ")";
  } else if (
    (monCoup === "pierre" && ordi === "ciseaux") ||
    (monCoup === "feuille" && ordi === "pierre") ||
    (monCoup === "ciseaux" && ordi === "feuille")
  ) {
    resultat.textContent = "Gagné ! L'ordi avait " + ordi;
    resultat.style.color = "green";
  } else {
    resultat.textContent = "Perdu... L'ordi avait " + ordi;
    resultat.style.color = "tomato";
  }
}`,
  },
};

export default lesson;
