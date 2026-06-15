import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "docker-04-dockerfile",
  moduleId: "module-special",
  title: "Fabriquer sa propre boîte (Dockerfile)",
  xp: 30,
  concept: {
    text: `Jusqu'ici on utilisait des images toutes prêtes. Mais tu peux **fabriquer la tienne** pour emballer ton propre programme. Pour ça, on écrit une **recette** dans un fichier nommé \`Dockerfile\`.

Chaque ligne est une étape, écrite en MAJUSCULES :

- \`FROM\` : la **base** de départ (ex. une boîte qui contient déjà Python).
- \`WORKDIR\` : le **dossier de travail** à l'intérieur de la boîte.
- \`COPY\` : **copier** tes fichiers dans la boîte.
- \`RUN\` : **exécuter** une commande pendant la fabrication (installer un truc).
- \`CMD\` : la commande à **lancer au démarrage** de la boîte.

Ensuite, on transforme cette recette en image avec \`docker build\`.`,
    analogy:
      "Un Dockerfile, c'est une recette de cuisine écrite étape par étape. `FROM` = « pars d'une pâte toute prête », `COPY` = « ajoute tes ingrédients », `RUN` = « fais cuire », `CMD` = « sers le plat ». `docker build` suit la recette et te fabrique le moule (l'image).",
  },
  codeExample: {
    language: "dockerfile",
    code: `# Recette pour mettre un petit programme Python dans une boîte
FROM python:3.12
WORKDIR /app
COPY mon_script.py .
CMD ["python", "mon_script.py"]`,
    output: `# On fabrique l'image à partir de la recette :
#   docker build -t mon-appli .
# Puis on lance la boîte :
#   docker run mon-appli
Bonjour depuis ma propre boîte Docker !`,
  },
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
      explanation:
        "`docker build` lit le Dockerfile et fabrique l'image correspondante.",
    },
  ],
};

export default lesson;
