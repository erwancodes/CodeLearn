import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-02-images-conteneurs",
  moduleId: "module-special",
  title: "Image vs conteneur",
  xp: 25,
  concept: {
    text: `Dans Docker, il y a deux mots à ne pas confondre : l'**image** et le **conteneur**.

- Une **image**, c'est le **plan de la boîte** : la recette figée qui décrit ce qu'il y a dedans. On ne l'utilise pas directement, on s'en sert pour fabriquer des boîtes.
- Un **conteneur**, c'est une **boîte réelle** créée à partir d'une image, qui tourne pour de vrai.

Avec **une seule image**, on peut créer **plusieurs conteneurs** identiques. Pratique quand un site a plein de visiteurs : on lance plusieurs boîtes pareilles pour tenir la charge.

On télécharge des images toutes prêtes depuis le **Docker Hub** (une sorte de bibliothèque en ligne) avec \`docker pull\`.`,
    analogy:
      "Une image, c'est le moule à gâteaux. Un conteneur, c'est le gâteau que tu sors du moule. Avec un seul moule (image), tu peux faire autant de gâteaux (conteneurs) que tu veux, tous identiques.",
  },
  codeExample: {
    language: "bash",
    code: `# 1. Télécharger une image toute prête (ici le serveur web nginx)
docker pull nginx

# 2. Créer et démarrer un conteneur à partir de cette image
docker run nginx`,
    output: `nginx: image téléchargée depuis le Docker Hub
Un conteneur démarre : le serveur web tourne maintenant dans sa boîte.`,
  },
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
  ],
};

export default lesson;
