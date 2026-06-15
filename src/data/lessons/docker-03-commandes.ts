import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-03-commandes",
  moduleId: "module-special",
  title: "Les commandes de base",
  xp: 25,
  concept: {
    text: `Pour piloter tes boîtes, tu tapes des commandes qui commencent toutes par \`docker\`. En voici 4 à connaître :

- \`docker run <image>\` : créer et **démarrer** une boîte.
- \`docker ps\` : voir la **liste des boîtes en train de tourner**.
- \`docker stop <nom>\` : **arrêter** une boîte.
- \`docker rm <nom>\` : **supprimer** une boîte arrêtée.

Une option très utile : \`-p\`. Elle **branche un port** de ta boîte sur ton ordinateur, pour pouvoir accéder à l'appli depuis ton navigateur.

Par exemple \`-p 8080:80\` veut dire : « ce qui arrive sur le port 8080 de mon PC, envoie-le sur le port 80 de la boîte ».`,
    analogy:
      "Gère tes conteneurs comme des consoles de jeu : `run` = en allumer une, `ps` = voir lesquelles sont allumées, `stop` = l'éteindre, `rm` = la ranger au placard. Le `-p`, c'est le câble qui relie la console à la télé pour voir l'image.",
  },
  codeExample: {
    language: "bash",
    code: `# Démarrer un serveur web accessible sur http://localhost:8080
docker run -p 8080:80 nginx

# Dans un autre terminal : voir les boîtes qui tournent
docker ps

# Arrêter puis supprimer la boîte nommée "joyeux_tesla"
docker stop joyeux_tesla
docker rm joyeux_tesla`,
    output: `CONTAINER ID   IMAGE   STATUS         PORTS                  NAMES
a1b2c3d4e5f6   nginx   Up 12 seconds  0.0.0.0:8080->80/tcp   joyeux_tesla`,
  },
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
        "`-p` branche un port de ta machine sur un port du conteneur pour y accéder.",
    },
    {
      question: "Quelle commande arrête une boîte qui tourne ?",
      options: ["docker rm", "docker kill-all", "docker stop", "docker pause-forever"],
      correctIndex: 2,
      explanation:
        "`docker stop <nom>` arrête proprement le conteneur. `docker rm` sert ensuite à le supprimer.",
    },
  ],
};

export default lesson;
