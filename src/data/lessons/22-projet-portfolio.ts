import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "22-projet-portfolio",
  moduleId: "module-5",
  title: "Projet : ton portfolio animé",
  xp: 120,
  concept: {
    text: "Projet final : un portfolio complet.",
    analogy: "Tu assembles toutes tes briques dans une vraie page de présentation.",
  },
  codeExample: {
    title: "Aperçu",
    language: "html",
    code: "<!-- header + hero + cartes + footer -->",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Ton portfolio animé",
    statement: `Le grand final ! Tu vas combiner **tout** ce que tu as appris : Flexbox, survol, dégradés, ombres et animations, dans un vrai **portfolio**.

Le code de départ contient déjà une structure complète : un en-tête, une bannière, une grille de projets et un pied de page. À toi de **la faire tienne**.

**Défis (du plus simple au plus stylé) :**
1. Remplace le nom, le slogan et les textes par les tiens.
2. Change les **couleurs** du dégradé et des cartes.
3. Ajoute une **4e carte** de projet dans la grille.
4. Ajoute un effet \`:hover\` sur les cartes (par ex. \`transform: translateY(-6px)\`).
5. Vérifie le rendu avec le bouton **Mobile** 📱 : tout doit rester lisible.

Quand tu es fier du résultat, clique sur « Marquer comme terminé ». Bravo, tu sais construire une page web complète !`,
    html: `<header class="nav">
  <span class="logo">Sam.</span>
  <nav class="liens">
    <a href="#">Projets</a>
    <a href="#">Contact</a>
  </nav>
</header>

<section class="hero">
  <h1>Salut, je suis Sam</h1>
  <p>Apprenti développeur web</p>
  <button class="btn">Voir mes projets</button>
</section>

<section class="grille">
  <article class="projet">
    <div class="vignette v1"></div>
    <h3>Mon premier site</h3>
    <p>HTML &amp; CSS</p>
  </article>
  <article class="projet">
    <div class="vignette v2"></div>
    <h3>Mini jeu</h3>
    <p>Logique &amp; fun</p>
  </article>
  <article class="projet">
    <div class="vignette v3"></div>
    <h3>Page perso</h3>
    <p>Responsive</p>
  </article>
</section>

<footer class="pied">Fait avec CodeLearn</footer>`,
    css: `body { margin: 0; background: #f8fafc; color: #0f172a; }

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
}
.logo { font-weight: 800; font-size: 22px; }
.liens a {
  margin-left: 18px;
  color: #475569;
  text-decoration: none;
  font-weight: 600;
}
.liens a:hover { color: #2563eb; }

.hero {
  margin: 12px;
  padding: 60px 24px;
  border-radius: 28px;
  text-align: center;
  color: white;
  background: linear-gradient(135deg, #2563eb, #06b6d4);
}
.hero h1 { font-size: 34px; margin: 0; }
.hero p { opacity: 0.9; margin: 8px 0 24px; }

.btn {
  background: white;
  color: #2563eb;
  border: none;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.btn:hover { transform: scale(1.06); }

.grille {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 12px;
}
.projet {
  flex: 1 1 200px;
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}
.projet:hover { transform: translateY(-6px); }
.projet h3 { margin: 12px 0 4px; }
.projet p { color: #64748b; margin: 0; }

.vignette { height: 110px; border-radius: 14px; }
.v1 { background: linear-gradient(135deg, #f97316, #ef4444); }
.v2 { background: linear-gradient(135deg, #8b5cf6, #2563eb); }
.v3 { background: linear-gradient(135deg, #10b981, #06b6d4); }

.pied {
  text-align: center;
  padding: 28px;
  color: #94a3b8;
}`,
  },
};

export default lesson;
