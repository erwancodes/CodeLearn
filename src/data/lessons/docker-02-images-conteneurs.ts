import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-02-images-conteneurs",
  moduleId: "module-special",
  title: "Image vs conteneur",
  xp: 25,
  concept: {
    text: `Dans Docker, il y a **deux mots** à ne surtout pas confondre : l'**image** et le **conteneur**. C'est LA notion clé.

**L'image = le plan figé de la boîte**

Une **image**, c'est la **recette** complète, gelée, qui décrit ce qu'il y a dans la boîte (le programme, ses outils, ses réglages). On ne s'en sert pas directement : c'est un **modèle** qui sert à fabriquer des boîtes.

**Le conteneur = la boîte réelle qui tourne**

Un **conteneur**, c'est une **boîte concrète** créée à partir d'une image, et qui s'exécute pour de vrai.

**1 image → autant de conteneurs qu'on veut**

Avec **une seule** image, on peut créer **plein** de conteneurs identiques. Très pratique : si un site web a énormément de visiteurs, on lance plusieurs boîtes identiques pour répartir la charge.

**Où trouve-t-on des images ?**

Sur le **Docker Hub** : une immense bibliothèque en ligne d'images toutes prêtes (Python, un serveur web, une base de données…). On en télécharge une avec \`docker pull\`.

**Le cycle complet**
1. \`docker pull\` → je récupère une **image** depuis le Docker Hub.
2. \`docker run\` → je crée un **conteneur** à partir de cette image et je le lance.`,
    analogy:
      "Une image, c'est le moule à gâteaux. Un conteneur, c'est le gâteau que tu sors du moule. Avec un seul moule (l'image), tu peux faire autant de gâteaux (les conteneurs) que tu veux, tous identiques. Le Docker Hub, c'est le magasin où tu achètes des moules tout prêts.",
  },
  codeExample: {
    title: "Télécharger une image, puis lancer un conteneur",
    language: "bash",
    code: `# 1. Récupérer l'image du serveur web nginx
docker pull nginx

# 2. Créer et démarrer un conteneur à partir de cette image
docker run nginx`,
    output: `nginx : image téléchargée depuis le Docker Hub.
Un conteneur démarre : le serveur web tourne dans sa boîte.`,
  },
  examples: [
    {
      title: "Une seule image, plusieurs conteneurs",
      language: "bash",
      code: `docker pull nginx     # 1 image

docker run -d nginx   # conteneur 1
docker run -d nginx   # conteneur 2
docker run -d nginx   # conteneur 3`,
      output: `3 conteneurs lancés à partir de la MÊME image.
Ils sont identiques mais indépendants.`,
    },
    {
      title: "Voir les images que tu as téléchargées",
      language: "bash",
      code: `docker images`,
      output: `REPOSITORY   TAG       SIZE
nginx        latest    187MB
python       3.12      1.02GB`,
    },
  ],
  quiz: [
    {
      question: "Quelle est la bonne comparaison ?",
      options: [
        "Image = gâteau, conteneur = moule",
        "Image = moule, conteneur = gâteau",
        "Image et conteneur, c'est exactement pareil",
        "Image = bateau, conteneur = océan",
      ],
      correctIndex: 1,
      explanation:
        "L'image est le moule (le plan figé) ; le conteneur est le résultat concret qui tourne.",
    },
    {
      question: "Combien de conteneurs peut-on créer à partir d'une seule image ?",
      options: ["Un seul", "Maximum deux", "Autant qu'on veut", "Aucun"],
      correctIndex: 2,
      explanation:
        "Une image sert de modèle : on peut en lancer autant de copies (conteneurs) que nécessaire.",
    },
    {
      question: "Que fait la commande `docker pull nginx` ?",
      options: [
        "Elle supprime nginx",
        "Elle télécharge l'image nginx depuis le Docker Hub",
        "Elle crée un nouveau langage",
        "Elle éteint l'ordinateur",
      ],
      correctIndex: 1,
      explanation:
        "`docker pull` récupère une image toute prête depuis la bibliothèque en ligne (Docker Hub).",
    },
    {
      question: "Comment s'appelle la bibliothèque en ligne d'images toutes prêtes ?",
      options: ["le Docker Store", "le Docker Hub", "GitHub", "le Cloud"],
      correctIndex: 1,
      explanation: "Le **Docker Hub** héberge des milliers d'images prêtes à l'emploi.",
    },
    {
      question: "Quelle commande affiche la liste des images téléchargées sur ta machine ?",
      options: ["docker ps", "docker list", "docker images", "docker show"],
      correctIndex: 2,
      explanation:
        "`docker images` liste les images présentes. (`docker ps`, lui, liste les conteneurs qui tournent.)",
    },
  ],
};

export default lesson;
