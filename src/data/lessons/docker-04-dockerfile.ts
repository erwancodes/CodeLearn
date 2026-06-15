import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-04-dockerfile",
  moduleId: "module-special",
  title: "Fabriquer sa propre boîte (Dockerfile)",
  xp: 30,
  concept: {
    text: `Jusqu'ici, on utilisait des images **toutes prêtes** (nginx, python…). Mais le vrai pouvoir de Docker, c'est de **fabriquer ta propre boîte** pour y mettre **ton** programme.

Pour ça, on écrit une **recette** dans un fichier nommé exactement \`Dockerfile\` (sans extension).

**Les instructions principales**

Chaque ligne est une **étape**, écrite en MAJUSCULES :

- \`FROM\` : l'image de **départ** (ex. une boîte qui contient déjà Python). On part toujours de quelque chose.
- \`WORKDIR\` : le **dossier de travail** à l'intérieur de la boîte.
- \`COPY\` : **copier** tes fichiers depuis ton PC vers la boîte.
- \`RUN\` : **exécuter une commande pendant la fabrication** (par ex. installer un outil).
- \`CMD\` : la commande à **lancer au démarrage** de la boîte.

**De la recette à la boîte : 2 étapes**

1. \`docker build -t mon-appli .\` → lit le Dockerfile et **fabrique l'image** (le \`-t\` lui donne un nom, le \`.\` dit « la recette est dans le dossier courant »).
2. \`docker run mon-appli\` → **lance un conteneur** à partir de ton image.

**Ne pas confondre RUN et CMD**
- \`RUN\` s'exécute **une fois**, pendant la construction de l'image (préparer la boîte).
- \`CMD\` s'exécute **à chaque démarrage** du conteneur (faire tourner le programme).`,
    analogy:
      "Un Dockerfile, c'est une recette de cuisine écrite étape par étape. `FROM` = « pars d'une pâte toute prête », `COPY` = « ajoute tes ingrédients », `RUN` = « fais cuire maintenant », `CMD` = « voilà comment servir le plat ». `docker build` suit la recette et te fabrique le moule (l'image) ; `docker run` sort enfin le gâteau.",
  },
  codeExample: {
    title: "Un Dockerfile pour un programme Python",
    language: "dockerfile",
    code: `# Recette pour mettre un script Python dans une boîte
FROM python:3.12
WORKDIR /app
COPY mon_script.py .
CMD ["python", "mon_script.py"]`,
    output: `Recette prête. Chaque ligne est une étape de fabrication.`,
  },
  examples: [
    {
      title: "Fabriquer l'image puis lancer la boîte",
      language: "bash",
      code: `# 1. Construire l'image à partir du Dockerfile
docker build -t mon-appli .

# 2. Lancer un conteneur basé sur cette image
docker run mon-appli`,
      output: `Étape 1/4 : FROM python:3.12
...
Image "mon-appli" construite avec succès !
Bonjour depuis ma propre boîte Docker !`,
    },
    {
      title: "Installer un outil pendant la construction (RUN)",
      language: "dockerfile",
      code: `FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install requests   # installé une fois, à la construction
CMD ["python", "app.py"]`,
      output: `RUN installe "requests" pendant la fabrication de l'image.
CMD lancera "app.py" à chaque démarrage de la boîte.`,
    },
  ],
  quiz: [
    {
      question: "Comment s'appelle le fichier qui contient la recette d'une image ?",
      options: ["recipe.txt", "Dockerfile", "image.json", "container.md"],
      correctIndex: 1,
      explanation: "La recette s'écrit dans un fichier nommé exactement `Dockerfile`.",
    },
    {
      question: "À quoi sert l'instruction `FROM` ?",
      options: [
        "À supprimer la boîte",
        "À choisir l'image de base sur laquelle on construit",
        "À copier des fichiers",
        "À démarrer le programme",
      ],
      correctIndex: 1,
      explanation:
        "`FROM` définit le point de départ (par exemple une image contenant déjà Python).",
    },
    {
      question: "Quelle commande transforme un Dockerfile en image ?",
      options: ["docker make", "docker run", "docker build", "docker copy"],
      correctIndex: 2,
      explanation: "`docker build` lit le Dockerfile et fabrique l'image correspondante.",
    },
    {
      question: "À quoi sert l'instruction `COPY` dans un Dockerfile ?",
      options: [
        "À copier tes fichiers dans la boîte",
        "À dupliquer l'image",
        "À supprimer des fichiers",
        "À renommer la boîte",
      ],
      correctIndex: 0,
      explanation: "`COPY` copie des fichiers de ton ordinateur vers l'intérieur de l'image.",
    },
    {
      question: "Quelle est la différence entre `RUN` et `CMD` ?",
      options: [
        "Aucune, c'est pareil",
        "RUN s'exécute pendant la construction, CMD au démarrage du conteneur",
        "CMD construit l'image, RUN la supprime",
        "RUN sert au CSS, CMD au HTML",
      ],
      correctIndex: 1,
      explanation:
        "`RUN` prépare l'image une fois (ex. installer un outil) ; `CMD` lance le programme à chaque démarrage de la boîte.",
    },
  ],
};

export default lesson;
