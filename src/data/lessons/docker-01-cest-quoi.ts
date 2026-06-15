import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-01-cest-quoi",
  moduleId: "module-special",
  title: "C'est quoi Docker ?",
  xp: 20,
  concept: {
    text: `Imagine : tu crées un super programme sur ton ordi. Il marche **nickel** chez toi. Tu l'envoies à un copain… et chez lui, **rien ne fonctionne**. Il lui manque un outil, il n'a pas la bonne version, son ordi est réglé autrement. C'est le fameux : « **pourtant ça marche sur mon PC !** ».

**Docker** règle ce problème une bonne fois pour toutes.

**L'idée en une phrase**

On met le programme **ET tout ce dont il a besoin** (le code, les outils, les réglages, la bonne version de tout) dans une **boîte**. Cette boîte s'appelle un **conteneur** (*container* en anglais).

**Pourquoi c'est génial**

- La boîte est **identique partout** : sur ton PC, celui de ton copain, ou un gros serveur dans le cloud. Si ça marche dans la boîte, ça marche partout pareil.
- La boîte est **isolée** : ce qui est dedans ne touche pas au reste de ton ordinateur. Tu peux tester sans rien casser.
- C'est **léger et rapide** : une boîte démarre en quelques secondes.
- Tu peux en lancer **plein en même temps** sans qu'elles se gênent.

**À ne pas confondre**

Une boîte Docker n'est PAS un programme d'installation classique. Tu n'installes rien « en dur » sur ton ordi : tout vit dans la boîte, et quand tu n'en veux plus, tu la jettes sans laisser de traces.`,
    analogy:
      "Pense aux gros conteneurs métalliques sur les bateaux. Peu importe ce qu'il y a dedans (des bananes, des vélos, des meubles), la boîte a toujours la même forme standard. Du coup, grues, bateaux et camions du monde entier savent la transporter de la même façon. Docker, c'est exactement ça, mais pour les programmes.",
  },
  codeExample: {
    title: "Lancer une appli dans une boîte avec une seule commande",
    language: "bash",
    code: `# Télécharge la boîte "hello-world" et la fait tourner
docker run hello-world`,
    output: `Hello from Docker!
La boîte a démarré, affiché ce message, puis s'est arrêtée.
Tout ça sans rien installer d'autre sur ton ordinateur.`,
  },
  examples: [
    {
      title: "La même boîte donne le même résultat partout",
      language: "bash",
      code: `# Sur ton PC, sur celui d'un ami, ou sur un serveur :
docker run mon-jeu

# La boîte contient déjà TOUT le nécessaire,
# donc le comportement est identique partout.`,
      output: `Bienvenue dans mon jeu !
(résultat strictement identique sur n'importe quelle machine)`,
    },
    {
      title: "Lancer plusieurs boîtes en même temps",
      language: "bash",
      code: `docker run -d nginx   # boîte 1 : un site web
docker run -d redis   # boîte 2 : une base de données

# Les deux tournent côte à côte, isolées,
# sans se gêner ni polluer ton ordinateur.`,
      output: `Deux conteneurs démarrés en arrière-plan (-d).
Chacun vit dans sa propre boîte.`,
    },
  ],
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
        "Docker emballe le programme avec tout son nécessaire pour qu'il se comporte pareil partout.",
    },
    {
      question: "Comment s'appelle la « boîte » qui contient une appli dans Docker ?",
      options: ["Un dossier", "Un conteneur", "Un fichier zip", "Un disque dur"],
      correctIndex: 1,
      explanation: "Cette boîte isolée s'appelle un conteneur (*container*).",
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
    {
      question: "Que veut dire « un conteneur est isolé » ?",
      options: [
        "Il n'a pas accès à Internet",
        "Ce qu'il contient ne touche pas au reste de ton ordinateur",
        "Il est tout seul et triste",
        "Il ne peut jamais être supprimé",
      ],
      correctIndex: 1,
      explanation:
        "Le conteneur vit à part : tu peux tester dedans sans risquer de casser ton système.",
    },
    {
      question: "Combien de conteneurs peut-on faire tourner en même temps ?",
      options: [
        "Un seul à la fois",
        "Maximum deux",
        "Plusieurs, côte à côte",
        "Aucun, c'est interdit",
      ],
      correctIndex: 2,
      explanation:
        "On peut lancer plusieurs conteneurs en parallèle ; chacun reste isolé des autres.",
    },
  ],
};

export default lesson;
