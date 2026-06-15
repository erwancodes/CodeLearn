import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "17-mon-site",
  moduleId: "module-4",
  title: "Atelier : crée ta page perso",
  xp: 90,
  concept: {
    text: `C'est le grand moment : tu construis **ton propre site web** !

Tu disposes de deux éditeurs (**HTML** et **CSS**) et d'un **aperçu en direct** qui se met à jour pendant que tu écris. Sers-toi du bouton **Mobile** pour vérifier que ton site est joli sur iPhone.

Clique sur **Ouvrir l'atelier** pour commencer.`,
    analogy:
      "Jusqu'ici tu lisais des recettes. Là, tu es aux fourneaux : à toi de cuisiner ta page.",
  },
  codeExample: {
    title: "Tu vas écrire ce genre de code",
    language: "html",
    code: `<div class="carte">
  <h1>Ton prénom</h1>
  <p>Quelques mots sur toi.</p>
</div>`,
    output: `(le rendu s'affiche en direct dans l'atelier)`,
  },
  quiz: [],
  webBuilder: {
    title: "Crée ta page perso",
    statement: `Personnalise cette page pour qu'elle te ressemble ! Quelques idées :

- Change le **titre** et le **texte** de présentation.
- Modifie les **couleurs** dans le CSS (essaie \`background\` et \`color\`).
- Ajoute un nouveau **paragraphe** \`<p>\` ou une **liste** \`<ul><li>\`.
- Ajoute tes **hobbies** dans la liste.
- Vérifie le rendu avec le bouton **Mobile** 📱 : ton site doit rester lisible.

Ton travail est **sauvegardé automatiquement**. Quand tu es fier du résultat, clique sur « Marquer comme terminé ».`,
    html: `<div class="carte">
  <h1>Salut, moi c'est Alex 👋</h1>
  <p class="sous-titre">15 ans · apprenti développeur</p>

  <h2>Ce que j'aime</h2>
  <ul>
    <li>🎮 Les jeux vidéo</li>
    <li>💻 Coder des sites</li>
    <li>🎵 La musique</li>
  </ul>

  <a class="bouton" href="#">Me contacter</a>
</div>`,
    css: `body {
  background: #f3f4f6;
  color: #1f2937;
}

.carte {
  max-width: 420px;
  margin: 24px auto;
  padding: 24px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 26px;
}

.sous-titre {
  color: #6b7280;
  margin-top: 4px;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
  display: inline-block;
}

li {
  margin: 8px 0;
}

.bouton {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 20px;
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-weight: bold;
}`,
  },
};

export default lesson;
