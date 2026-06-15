# PRD - CodeLearn (app d'apprentissage programmation)

> App web légère pour apprendre les bases de la programmation en autonomie.
> Stack: Vite + React. Persistence: localStorage uniquement. Zéro backend.

---

## Contexte

Un nouveau stagiaire arrive à la Mairie des Andelys sans aucune base en programmation. Son tuteur veut qu'il apprenne en autonomie pendant les temps libres du stage. L'app doit être simple à installer (juste `npm run dev`), utilisable sans connexion internet, et lui permettre de progresser à son rythme avec des exercices concrets.

---

## Objectif produit

Permettre à un débutant complet d'apprendre les bases absolues de la programmation (variables, conditions, boucles, fonctions) via des leçons courtes, des exercices interactifs et un suivi de progression persisté en local.

---

## Stack technique

| Élément | Choix | Pourquoi |
|---|---|---|
| Bundler | Vite 5 | Setup instantané, DX parfaite |
| UI | React 18 | Composants réutilisables, familier pour la suite |
| Routing | React Router v6 | Navigation entre leçons/modules |
| State global | Zustand | Léger, pas de boilerplate inutile |
| Persistence | localStorage | Zéro backend, fonctionne offline |
| Styling | Tailwind CSS v3 | Rapide à écrire, pas besoin de fichiers CSS |
| Exécution Python | Pyodide (CDN) | Faire tourner du vrai Python dans le navigateur |
| Icons | Lucide React | Propres, légères |

> Pas de TanStack pour ce projet. Pas de fetching, pas de serveur, donc pas besoin de Query. React Router suffit pour la navigation.

---

## Architecture des données (localStorage)

Tout est persisté sous deux clés :

```ts
// Clé: "codelearn_progress"
type Progress = {
  modules: {
    [moduleId: string]: {
      completed: boolean
      lessons: {
        [lessonId: string]: {
          completed: boolean
          score: number        // 0 à 100
          attempts: number
          completedAt: string  // ISO date
        }
      }
    }
  }
  totalXP: number
  streak: number              // jours consécutifs
  lastActiveDate: string      // ISO date
}

// Clé: "codelearn_settings"
type Settings = {
  username: string
  theme: "light" | "dark"
}
```

---

## Structure des modules

### Module 1 - Les bases absolues (obligatoire en premier)

| ID | Leçon | Type | XP |
|---|---|---|---|
| `01-variables` | Variables et types | Leçon + QCM | 20 XP |
| `02-conditions` | if / elif / else | Leçon + QCM | 20 XP |
| `03-boucles` | for / while | Leçon + QCM | 25 XP |
| `04-fonctions` | Fonctions et return | Leçon + QCM | 25 XP |
| `05-projet` | Mini projet final | Exercice libre | 50 XP |

### Module 2 - Structures de données (débloqué après module 1)

| ID | Leçon | Type | XP |
|---|---|---|---|
| `06-listes` | Listes et tableaux | Leçon + QCM | 25 XP |
| `07-dicts` | Dictionnaires | Leçon + QCM | 25 XP |
| `08-fichiers` | Lire/écrire des fichiers | Leçon + QCM | 30 XP |
| `09-projet` | Mini projet CSV | Exercice libre | 60 XP |

### Module 3 - Web (débloqué après module 2)

| ID | Leçon | Type | XP |
|---|---|---|---|
| `10-html` | HTML de base | Leçon + QCM | 20 XP |
| `11-css` | CSS et mise en page | Leçon + QCM | 20 XP |
| `12-js` | JavaScript intro | Leçon + QCM | 30 XP |
| `13-projet` | Page perso complète | Exercice libre | 80 XP |

---

## Structure de fichiers

```
codelearn/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CodeEditor.tsx       # Éditeur de code + bouton Run
│   │   ├── LessonCard.tsx       # Carte d'une leçon dans le dashboard
│   │   ├── ModuleCard.tsx       # Carte d'un module
│   │   ├── ProgressBar.tsx      # Barre de progression XP
│   │   ├── QuizBlock.tsx        # Composant QCM interactif
│   │   ├── XPBadge.tsx          # Badge XP gagné
│   │   └── Navbar.tsx
│   ├── data/
│   │   ├── modules.ts           # Définition statique de tous les modules
│   │   └── lessons/
│   │       ├── 01-variables.ts  # Contenu de chaque leçon (texte + exemples + quiz)
│   │       ├── 02-conditions.ts
│   │       └── ...
│   ├── pages/
│   │   ├── Home.tsx             # Dashboard principal
│   │   ├── Module.tsx           # Vue d'un module (liste des leçons)
│   │   ├── Lesson.tsx           # Vue d'une leçon complète
│   │   ├── Exercise.tsx         # Exercice libre avec éditeur
│   │   └── Onboarding.tsx       # Première visite: saisir son prénom
│   ├── store/
│   │   └── useProgress.ts       # Store Zustand avec persist middleware
│   ├── utils/
│   │   └── storage.ts           # Helpers get/set localStorage
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Pages et fonctionnalités

### `/` - Onboarding (première visite seulement)

- Champ: "Comment tu t'appelles ?"
- Bouton "C'est parti"
- Redirige vers `/dashboard` et sauvegarde le prénom

### `/dashboard` - Dashboard

- Header: "Salut [prénom] !" + XP total + streak
- Barre XP globale avec niveau (Débutant / Junior / Dev)
- Grille des modules (card par module)
  - Module verrouillé si le précédent n'est pas complété à 100%
  - Module en cours: barre de progression interne
  - Module complété: badge vert

### `/module/:moduleId` - Vue d'un module

- Titre du module + description
- Liste des leçons dans l'ordre
  - Statut: verrouillée / en cours / complétée
  - Score et date si complétée
- Bouton "Reprendre" ou "Commencer"

### `/lesson/:moduleId/:lessonId` - Vue d'une leçon

Structure fixe en scroll vertical:

1. En-tête: titre + XP à gagner
2. Section "Concept" (texte markdown + analogie)
3. Section "Exemple" (bloc de code syntaxiquement coloré, lecture seule)
4. Section "Résultat attendu" (output affiché statiquement)
5. Section "Quiz" (1 à 3 questions QCM)
6. Bouton "Valider et continuer" (actif seulement si tous les QCM répondus)
7. Animation XP gagnée si score > 0

### `/exercise/:moduleId/:lessonId` - Exercice libre

- Énoncé de l'exercice affiché
- Éditeur de code (CodeMirror ou textarea stylé, selon complexité)
- Bouton "Exécuter" qui lance Pyodide (pour Python) ou eval (pour JS)
- Console de sortie affichant stdout/erreurs
- Bouton "Voir la correction" (débloque après 2 tentatives)
- Bouton "Marquer comme terminé" (subjectif, pas de correction automatique pour les exercices libres)

---

## Composant CodeEditor

```tsx
// Exécution Python via Pyodide (chargé une seule fois au démarrage)
// Exécution JS via Function() sandboxée
// Capture stdout avec un hook personnalisé sur pyodide.runPython()
// Affiche les erreurs en rouge dans la console de sortie
// Pas d'auto-complétion (trop complexe pour v1)
```

Chargement Pyodide: banner "Chargement de l'interpréteur Python..." pendant ~2-3s, puis disparaît.

---

## Système XP et niveaux

| XP total | Niveau |
|---|---|
| 0 - 99 | Débutant |
| 100 - 299 | Apprenti |
| 300 - 599 | Junior |
| 600 - 999 | Développeur |
| 1000+ | Senior |

Streak: incrémenté si l'utilisateur complète au moins 1 leçon par jour calendaire. Remis à 0 si un jour est sauté.

---

## Contenu d'une leçon (type TypeScript)

```ts
type Lesson = {
  id: string
  moduleId: string
  title: string
  xp: number
  concept: {
    text: string        // Markdown
    analogy: string     // Texte court, affiché dans une box spéciale
  }
  codeExample: {
    language: "python" | "html" | "css" | "javascript"
    code: string
    output: string      // Affiché statiquement sous le code
  }
  quiz: {
    question: string
    options: string[]
    correctIndex: number
    explanation: string  // Affiché après la réponse
  }[]
  exerciseId?: string    // Optionnel, id de l'exercice associé
}
```

---

## Règles UX

- Pas de compte, pas de mot de passe, pas d'email. Juste un prénom local.
- Navigation linéaire: on ne peut pas sauter une leçon non complétée.
- Un QCM raté n'empêche pas d'avancer (score réduit, mais pas de blocage).
- Pas de timer, pas de pression. L'apprenant avance à son rythme.
- Mobile-friendly (grid responsive, textes lisibles sur petit écran).
- Thème clair par défaut, toggle dark mode dans les settings.

---

## Ce qui est hors scope (v1)

- Backend ou API
- Authentification
- Partage de progression
- Leaderboard
- Génération de contenu par IA
- Support d'autres langages que Python, HTML, CSS, JS
- Éditeur avec auto-complétion

---

## Commandes de setup

```bash
npm create vite@latest codelearn -- --template react-ts
cd codelearn
npm install react-router-dom zustand tailwindcss @tailwindcss/vite lucide-react
npx tailwindcss init -p
npm run dev
```

---

## Priorités de développement

1. Setup Vite + Tailwind + routing de base
2. Store Zustand avec persist localStorage
3. Page Onboarding + Dashboard
4. Composant leçon (texte + code statique + QCM)
5. Intégration Pyodide pour les exercices Python
6. Contenu des 5 leçons du module 1
7. Système XP + animations
8. Modules 2 et 3

---

*Document rédigé pour le stage Mairie des Andelys, juin 2026.*
