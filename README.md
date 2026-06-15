# 🎓 CodeLearn

> App web légère pour apprendre les **bases de la programmation** en autonomie — leçons courtes, QCM interactifs, et un vrai éditeur de code qui exécute du **Python** et du **JavaScript** directement dans le navigateur.

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**Aucun backend, aucun compte, aucune base de données.** Toute la progression est
sauvegardée dans le navigateur (`localStorage`). L'app fonctionne hors ligne
(sauf le premier chargement de l'interpréteur Python).

---

## ✨ Fonctionnalités

- **3 modules progressifs** — Les bases (variables, conditions, boucles, fonctions),
  Structures de données (listes, dictionnaires, fichiers), et le Web (HTML, CSS, JS).
- **Module Spécial Docker** ★ — bonus toujours accessible, qui explique les conteneurs
  avec des analogies simples (compréhensible dès 15 ans).
- **17 leçons** avec concept, analogie, exemple de code coloré, résultat attendu et QCM.
- **Éditeur de code exécutable** : Python via [Pyodide](https://pyodide.org/),
  JavaScript en natif. Console de sortie avec gestion des erreurs.
- **Système de progression** : XP, niveaux (Débutant → Senior), *streak* quotidien.
- **Déverrouillage progressif** : on ne saute pas une leçon non terminée.
- **Thème clair / sombre** et **mobile-friendly**.
- **Onboarding minimal** : juste un prénom, stocké localement.

---

## 🚀 Démarrage

```bash
git clone https://github.com/erwancodes/CodeLearn.git
cd CodeLearn
npm install
npm run dev
```

Puis ouvre l'URL affichée (par défaut http://localhost:5173, ou le port libre suivant).

> ⚠️ La toute première exécution de code **Python** télécharge l'interpréteur
> (Pyodide) depuis Internet (~quelques secondes). Une fois chargé, il fonctionne
> sans reconnexion pendant la session. Le reste de l'app marche 100 % hors ligne.

---

## 🧰 Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualise le build |
| `npm run lint` | Vérification TypeScript |

---

## 🏗️ Stack

- **Vite 5** + **React 18** + **TypeScript**
- **React Router v6** (navigation)
- **Zustand** + middleware `persist` (état + localStorage)
- **Tailwind CSS v3** (styles)
- **Pyodide** via CDN (Python dans le navigateur)
- **Lucide React** (icônes)

---

## 📁 Structure

```
src/
├── components/   # UI réutilisable (CodeEditor, QuizBlock, cards, navbar…)
├── data/         # Contenu statique : modules, leçons, exercices
├── pages/        # Onboarding, Dashboard, Module, Lesson, Exercise, Settings
├── store/        # Store Zustand (progression, XP, streak, déverrouillage)
├── utils/        # localStorage, niveaux, Pyodide, exécution JS, coloration
├── types.ts
├── App.tsx
└── main.tsx
```

---

## 💾 Données locales

Deux clés dans `localStorage` :
- `codelearn_progress` — progression, XP, streak
- `codelearn_settings` — prénom et thème

Pour repartir de zéro : **Réglages → « Réinitialiser ma progression »**
(ou vider le localStorage du site).

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Ouvre une *issue* pour signaler un bug
ou proposer une idée, ou une *pull request* pour ajouter une leçon / un module.

Le contenu pédagogique vit dans `src/data/lessons/` (une leçon = un fichier) et
`src/data/exercises.ts`. Ajouter une leçon consiste à créer le fichier, l'importer
dans `src/data/lessons/index.ts`, puis l'ajouter à `src/data/modules.ts`.

---

## 📄 Licence

Distribué sous licence **MIT**. Voir [`LICENSE`](./LICENSE).
