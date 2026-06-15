import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "08-fichiers",
  moduleId: "module-2",
  title: "Lire / écrire des fichiers",
  xp: 30,
  concept: {
    text: `Jusqu'ici, dès qu'un programme se termine, tout ce qu'il avait en mémoire **disparaît**. Pour **garder** des informations (un score, une note, des données), on les enregistre dans un **fichier** sur le disque.

En Python, on ouvre un fichier avec \`open()\`, en précisant un **mode** :

- \`"w"\` (write = écrire) : crée le fichier ou **écrase** son contenu.
- \`"r"\` (read = lire) : lit le contenu.
- \`"a"\` (append = ajouter) : ajoute à la **fin** sans rien effacer.

**La bonne façon : \`with\`**

On utilise \`with open(...) as f:\`. Le fichier est rangé dans la variable \`f\`, et il se **ferme tout seul** à la fin du bloc, même en cas de problème.

\`\`\`python
with open("notes.txt", "w") as f:
    f.write("Bonjour")
\`\`\`

**Écrire** : \`f.write("du texte")\`. Pour aller à la ligne, on ajoute \`\\n\` (le retour à la ligne).

**Lire** : \`f.read()\` renvoie tout le contenu du fichier sous forme de texte.

⚠️ Attention : le mode \`"w"\` **efface** tout l'ancien contenu. Si tu veux conserver l'existant et juste ajouter, utilise \`"a"\`.`,
    analogy:
      "Ouvrir un fichier, c'est comme ouvrir un cahier. En mode lecture (\"r\") tu le lis. En mode écriture (\"w\") tu prends une page blanche en jetant l'ancienne. En mode ajout (\"a\") tu écris à la suite, à la fin. Et `with`, c'est l'ami qui referme le cahier pour toi quand tu as fini.",
  },
  codeExample: {
    title: "Écrire dans un fichier puis le relire",
    language: "python",
    code: `# Écrire
with open("notes.txt", "w") as f:
    f.write("Ligne 1\\n")
    f.write("Ligne 2\\n")

# Relire
with open("notes.txt", "r") as f:
    contenu = f.read()

print(contenu)`,
    output: `Ligne 1
Ligne 2`,
  },
  examples: [
    {
      title: "Ajouter à la fin sans effacer (mode \"a\")",
      language: "python",
      code: `with open("journal.txt", "w") as f:
    f.write("Lundi : super journée\\n")

with open("journal.txt", "a") as f:    # ajout
    f.write("Mardi : encore mieux\\n")

with open("journal.txt", "r") as f:
    print(f.read())`,
      output: `Lundi : super journée
Mardi : encore mieux`,
    },
    {
      title: "Enregistrer le contenu d'une liste",
      language: "python",
      code: `courses = ["pain", "lait", "oeufs"]

with open("courses.txt", "w") as f:
    for article in courses:
        f.write(article + "\\n")

print("Liste enregistrée !")`,
      output: `Liste enregistrée !`,
    },
  ],
  quiz: [
    {
      question: "Quel mode ouvre un fichier en écriture (en écrasant l'ancien contenu) ?",
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
        "C'est juste pour faire joli",
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
    {
      question: "À quoi sert `\\n` dans `f.write(\"Bonjour\\n\")` ?",
      options: [
        "À afficher le mot 'n'",
        "À aller à la ligne (retour à la ligne)",
        "À mettre en gras",
        "À fermer le fichier",
      ],
      correctIndex: 1,
      explanation: "`\\n` est le caractère spécial qui signifie « retour à la ligne ».",
    },
    {
      question: "Que renvoie `f.read()` ?",
      options: [
        "Le nombre de lignes",
        "Tout le contenu du fichier sous forme de texte",
        "La première ligne seulement",
        "Rien",
      ],
      correctIndex: 1,
      explanation: "`f.read()` lit et renvoie l'intégralité du contenu du fichier.",
    },
  ],
};

export default lesson;
