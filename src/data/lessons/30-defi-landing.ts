import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "30-defi-landing",
  moduleId: "module-8",
  title: "Défi : une page d'accueil pro",
  xp: 120,
  concept: {
    text: "Défi : reproduire une landing page propre en HTML/CSS.",
    analogy: "Tu deviens l'architecte d'une vitrine : structure claire, style soigné.",
  },
  codeExample: {
    title: "Aperçu",
    language: "html",
    code: "<!-- header + hero + features + footer -->",
    output: "(rendu dans l'atelier)",
  },
  quiz: [],
  webBuilder: {
    title: "Recrée une landing page",
    statement: `Premier défi du module : une vraie **page d'accueil** d'app ou de produit, comme celles que tu vois partout.

Le code de départ pose les sections. À toi de la rendre **pro et personnelle**.

**Défis :**
1. Invente un **nom de produit** et un slogan accrocheur.
2. Soigne le **dégradé** et les couleurs.
3. Remplis la rangée de **3 atouts** (icônes texte + descriptions).
4. Ajoute un effet \`:hover\` sur le bouton et les atouts.
5. Vérifie en mode **Mobile** 📱 que tout reste lisible.`,
    html: `<header class="bar">
  <strong>MonProduit</strong>
  <a class="cta" href="#">Essayer</a>
</header>

<section class="hero">
  <h1>Le slogan qui claque</h1>
  <p>Une phrase qui explique ton produit en deux secondes.</p>
  <a class="cta-grand" href="#">Commencer gratuitement</a>
</section>

<section class="atouts">
  <div class="atout"><h3>Rapide</h3><p>Prêt en un instant.</p></div>
  <div class="atout"><h3>Simple</h3><p>Aucune prise de tête.</p></div>
  <div class="atout"><h3>Gratuit</h3><p>Zéro euro, vraiment.</p></div>
</section>

<footer class="pied">© Mon Produit</footer>`,
    css: `body { margin: 0; font-family: sans-serif; color: #0f172a; background: #f8fafc; }

.bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 24px;
}
.cta {
  background: #0f172a; color: white; text-decoration: none;
  padding: 8px 16px; border-radius: 999px; font-weight: 600;
}

.hero {
  text-align: center; color: white; padding: 70px 24px; margin: 12px;
  border-radius: 28px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
}
.hero h1 { font-size: 36px; margin: 0 0 10px; }
.hero p { opacity: 0.9; margin: 0 0 24px; }
.cta-grand {
  background: white; color: #2563eb; text-decoration: none; font-weight: 700;
  padding: 14px 26px; border-radius: 999px;
}

.atouts {
  display: flex; flex-wrap: wrap; gap: 16px; padding: 24px 12px;
}
.atout {
  flex: 1 1 200px; background: white; border-radius: 18px; padding: 20px;
  box-shadow: 0 16px 30px rgba(0,0,0,0.06);
}
.atout h3 { margin: 0 0 6px; }
.atout p { color: #64748b; margin: 0; }

.pied { text-align: center; padding: 28px; color: #94a3b8; }`,
  },
};

export default lesson;
