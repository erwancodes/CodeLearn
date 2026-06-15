import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "08-fichiers",
  moduleId: "module-2",
  title: "Lire / écrire des fichiers",
  xp: 30,
  concept: {
    text: `Un programme peut **lire** et **écrire** des fichiers sur le disque. En Python, on utilise \`open()\`.

- Mode \`"w"\` : écrire (écrase le contenu existant).
- Mode \`"r"\` : lire.
- Mode \`"a"\` : ajouter à la fin.

La bonne pratique est d'utiliser \`with open(...) as f:\` : le fichier se ferme automatiquement à la fin du bloc.

\`\`\`python
with open("notes.txt", "w") as f:
    f.write("Bonjour")
\`\`\``,
    analogy:
      "Ouvrir un fichier, c'est comme ouvrir un cahier : tu peux le lire (mode lecture), écrire dedans en effaçant tout (mode écriture) ou ajouter une page à la fin (mode ajout). `with` referme le cahier tout seul quand tu as fini.",
  },
  codeExample: {
    language: "python",
    code: `# Écrire dans un fichier
with open("notes.txt", "w") as f:
    f.write("Ligne 1\\n")
    f.write("Ligne 2\\n")

# Relire le fichier
with open("notes.txt", "r") as f:
    contenu = f.read()

print(contenu)`,
    output: `Ligne 1
Ligne 2`,
  },
  quiz: [
    {
      question: "Quel mode ouvre un fichier en écriture (en écrasant) ?",
      options: ['"r"', '"w"', '"a"', '"x"'],
      correctIndex: 1,
      explanation: '`"w"` (write) ouvre en écriture et écrase le contenu existant.',
    },
    {
      question: "Pourquoi utiliser `with open(...) as f:` ?",
      options: [
        "Pour aller plus vite",
        "Pour fermer automatiquement le fichier à la fin",
        "Pour lire plusieurs fichiers en même temps",
        "C'est obligatoire sinon ça plante",
      ],
      correctIndex: 1,
      explanation:
        "Le bloc `with` garantit que le fichier est correctement fermé, même en cas d'erreur.",
    },
    {
      question: "Quel mode ajoute du texte à la fin sans effacer l'existant ?",
      options: ['"r"', '"w"', '"a"', '"add"'],
      correctIndex: 2,
      explanation: '`"a"` (append) ajoute à la fin du fichier.',
    },
  ],
};

export default lesson;
