import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-01-cest-quoi",
  moduleId: "module-special",
  title: "C'est quoi Docker ?",
  xp: 20,
  concept: {
    text: `Imagine que tu crées un super jeu sur ton ordi. Il marche nickel chez toi. Tu l'envoies à un copain… et chez lui, **rien ne marche** : il lui manque un truc, il n'a pas la bonne version, etc. Le fameux « pourtant ça marche sur mon PC ! ».

**Docker** règle ce problème. L'idée est simple : on met l'appli **ET tout ce dont elle a besoin** (le code, les outils, les réglages) dans une **boîte**. Cette boîte s'appelle un **conteneur** (*container* en anglais).

Le génie, c'est que cette boîte est **identique partout** : sur ton PC, sur celui de ton copain, ou sur un gros serveur dans le cloud. Si ça marche dans la boîte, ça marche partout.

- Une **boîte (conteneur)** = ton appli + tout son nécessaire, isolée du reste.
- Elle est **légère** et démarre en **quelques secondes**.
- On peut en lancer **plusieurs en même temps** sans qu'elles se gênent.`,
    analogy:
      "Pense aux gros conteneurs métalliques sur les bateaux. Peu importe ce qu'il y a dedans (des bananes ou des vélos), la boîte a toujours la même forme. Du coup grues, bateaux et camions savent la transporter partout pareil. Docker, c'est ça pour les applis.",
  },
  codeExample: {
    language: "bash",
    code: `# Lancer une appli dans une boîte (conteneur) avec une seule commande
docker run hello-world`,
    output: `Hello from Docker!
Cette boîte a démarré, affiché ce message, puis s'est arrêtée.
Tout ça sans rien installer d'autre sur ton ordinateur.`,
  },
  quiz: [
    {
      question: "Quel problème Docker cherche-t-il à résoudre ?",
      options: [
        "Rendre les ordinateurs plus rapides",
        "Le « ça marche chez moi mais pas chez toi »",
        "Coder plus vite",
        "Remplacer Internet",
      ],
      correctIndex: 1,
      explanation:
        "Docker emballe l'appli avec tout son nécessaire pour qu'elle se comporte pareil partout.",
    },
    {
      question: "Comment s'appelle la « boîte » qui contient une appli dans Docker ?",
      options: ["Un dossier", "Un conteneur", "Un fichier zip", "Un disque dur"],
      correctIndex: 1,
      explanation:
        "Cette boîte isolée s'appelle un conteneur (*container*).",
    },
    {
      question: "Quel est un gros avantage d'un conteneur ?",
      options: [
        "Il est identique partout où on le lance",
        "Il rend le code plus joli",
        "Il supprime les bugs tout seul",
        "Il fonctionne uniquement sur Mac",
      ],
      correctIndex: 0,
      explanation:
        "Même boîte = même comportement sur ton PC, celui d'un ami ou un serveur.",
    },
  ],
};

export default lesson;
