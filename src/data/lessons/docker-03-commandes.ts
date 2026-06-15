import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-03-commandes",
  moduleId: "module-special",
  title: "Les commandes de base",
  xp: 25,
  concept: {
    text: `Pour piloter tes boîtes, tu tapes des commandes dans le terminal. Elles commencent **toutes** par le mot \`docker\`, suivi de l'action à faire.

**Les 4 commandes indispensables**

- \`docker run <image>\` : **créer et démarrer** une boîte à partir d'une image.
- \`docker ps\` : afficher la **liste des boîtes en train de tourner**.
- \`docker stop <nom>\` : **arrêter** une boîte.
- \`docker rm <nom>\` : **supprimer** une boîte arrêtée.

**Astuce :** chaque conteneur reçoit un **nom rigolo** au hasard (genre \`joyeux_tesla\`) et un identifiant. Tu utilises ce nom (ou l'identifiant) pour l'arrêter ou le supprimer.

**L'option \`-p\` : brancher un port**

Une boîte est isolée : par défaut, tu ne peux pas accéder à ce qui tourne dedans depuis ton navigateur. L'option \`-p\` crée un **branchement** entre un port de ton ordinateur et un port de la boîte.

\`\`\`bash
docker run -p 8080:80 nginx
\`\`\`

Ça veut dire : « ce qui arrive sur le port **8080** de mon PC, envoie-le vers le port **80** de la boîte ». Tu peux alors ouvrir \`http://localhost:8080\` dans ton navigateur.

**L'option \`-d\` : tourner en arrière-plan**

\`-d\` (*detached*) lance la boîte **en arrière-plan**, pour que ton terminal reste libre.`,
    analogy:
      "Gère tes conteneurs comme des consoles de jeu : `run` = en allumer une, `ps` = voir lesquelles sont allumées, `stop` = en éteindre une, `rm` = la ranger au placard. L'option `-p`, c'est le câble HDMI qui relie la console à la télé : sans lui, la console tourne mais tu ne vois rien à l'écran.",
  },
  codeExample: {
    title: "Démarrer un serveur web et voir les boîtes actives",
    language: "bash",
    code: `# Démarrer nginx, accessible sur http://localhost:8080
docker run -d -p 8080:80 nginx

# Voir les boîtes qui tournent
docker ps`,
    output: `CONTAINER ID   IMAGE   STATUS         PORTS                    NAMES
a1b2c3d4e5f6   nginx   Up 12 seconds  0.0.0.0:8080->80/tcp     joyeux_tesla`,
  },
  examples: [
    {
      title: "Arrêter puis supprimer une boîte",
      language: "bash",
      code: `# On utilise le nom du conteneur
docker stop joyeux_tesla
docker rm joyeux_tesla`,
      output: `joyeux_tesla
joyeux_tesla
(la boîte est arrêtée, puis supprimée)`,
    },
    {
      title: "Comprendre l'option -p",
      language: "bash",
      code: `# Port de MON PC : 3000  ->  port de la BOÎTE : 80
docker run -p 3000:80 nginx

# Ensuite, dans le navigateur : http://localhost:3000`,
      output: `Le site de la boîte est maintenant
accessible sur http://localhost:3000`,
    },
  ],
  quiz: [
    {
      question: "Quelle commande affiche la liste des conteneurs en cours d'exécution ?",
      options: ["docker list", "docker ps", "docker show", "docker run"],
      correctIndex: 1,
      explanation: "`docker ps` liste les conteneurs actuellement en train de tourner.",
    },
    {
      question: "Que fait l'option `-p 8080:80` ?",
      options: [
        "Elle supprime le port 80",
        "Elle relie le port 8080 de ton PC au port 80 de la boîte",
        "Elle met l'appli en pause",
        "Elle protège la boîte par un mot de passe",
      ],
      correctIndex: 1,
      explanation:
        "`-p` branche un port de ta machine sur un port du conteneur pour pouvoir y accéder.",
    },
    {
      question: "Quelle commande arrête une boîte qui tourne ?",
      options: ["docker rm", "docker kill-all", "docker stop", "docker pause-forever"],
      correctIndex: 2,
      explanation:
        "`docker stop <nom>` arrête proprement le conteneur. `docker rm` sert ensuite à le supprimer.",
    },
    {
      question: "Par quel mot commencent toutes ces commandes ?",
      options: ["run", "docker", "container", "sudo"],
      correctIndex: 1,
      explanation: "Toutes les commandes commencent par `docker`, suivi de l'action.",
    },
    {
      question: "À quoi sert l'option `-d` dans `docker run -d nginx` ?",
      options: [
        "À supprimer la boîte ensuite",
        "À lancer la boîte en arrière-plan",
        "À afficher des détails",
        "À désactiver Internet",
      ],
      correctIndex: 1,
      explanation:
        "`-d` (*detached*) fait tourner le conteneur en arrière-plan et libère ton terminal.",
    },
  ],
};

export default lesson;
