import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "03-boucles",
  moduleId: "module-1",
  title: "for / while",
  xp: 25,
  concept: {
    text: `Une **boucle** permet de répéter du code plusieurs fois sans le réécrire.

- La boucle \`for\` répète un nombre **connu** de fois. \`range(5)\` génère les nombres 0, 1, 2, 3, 4.
- La boucle \`while\` répète **tant qu'**une condition reste vraie.

Attention avec \`while\` : si la condition ne devient jamais fausse, le programme tourne à l'infini !`,
    analogy:
      "Une boucle, c'est comme dire « fais 10 pompes ». Tu ne réécris pas « fais une pompe » dix fois : tu répètes la même action en comptant.",
  },
  codeExample: {
    language: "python",
    code: `# Boucle for : compte de 0 à 4
for i in range(5):
    print("Tour", i)

# Boucle while : tant que compteur < 3
compteur = 0
while compteur < 3:
    print("Encore", compteur)
    compteur = compteur + 1`,
    output: `Tour 0
Tour 1
Tour 2
Tour 3
Tour 4
Encore 0
Encore 1
Encore 2`,
  },
  quiz: [
    {
      question: "Combien de fois s'exécute `for i in range(3):` ?",
      options: ["2 fois", "3 fois", "4 fois", "Une infinité"],
      correctIndex: 1,
      explanation:
        "`range(3)` génère 0, 1, 2 — soit 3 valeurs, donc 3 répétitions.",
    },
    {
      question: "Quelle boucle utiliser quand on ne connaît pas à l'avance le nombre de répétitions ?",
      options: ["for", "while", "loop", "repeat"],
      correctIndex: 1,
      explanation:
        "`while` répète tant qu'une condition est vraie, idéal quand le nombre de tours dépend de l'exécution.",
    },
    {
      question: "Quel risque pose une boucle `while` mal écrite ?",
      options: [
        "Elle ne s'exécute jamais",
        "Elle tourne à l'infini",
        "Elle inverse l'ordre des nombres",
        "Elle efface les variables",
      ],
      correctIndex: 1,
      explanation:
        "Si la condition ne devient jamais fausse, la boucle ne s'arrête plus : c'est une boucle infinie.",
    },
  ],
};

export default lesson;
