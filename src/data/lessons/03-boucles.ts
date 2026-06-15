import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "03-boucles",
  moduleId: "module-1",
  title: "for / while",
  xp: 25,
  concept: {
    text: `Imagine que tu doives afficher "Bonjour" 100 fois. Tu ne vas pas écrire \`print("Bonjour")\` cent fois ! Les **boucles** servent exactement à ça : **répéter** du code automatiquement.

Il existe deux grandes boucles : \`for\` et \`while\`.

**La boucle \`for\` : répéter un nombre connu de fois**

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

\`range(5)\` génère les nombres **0, 1, 2, 3, 4** (ça commence à 0 et ça s'arrête **avant** 5). La variable \`i\` prend chacune de ces valeurs, l'une après l'autre. On fait donc **5 tours**.

**La boucle \`while\` : répéter tant qu'une condition est vraie**

\`\`\`python
while compteur < 3:
    print(compteur)
    compteur = compteur + 1
\`\`\`

On lit : « **TANT QUE** le compteur est plus petit que 3, répète ». À chaque tour, il faut faire évoluer la condition (ici on augmente le compteur), sinon...

**⚠️ La boucle infinie**

Si la condition d'un \`while\` ne devient jamais fausse, la boucle ne s'arrête **jamais** : c'est une boucle infinie, et le programme se fige. C'est l'erreur classique du débutant !

**Quelle boucle choisir ?**
- Je sais combien de fois répéter → \`for\`
- Je répète jusqu'à ce qu'un événement arrive → \`while\``,
    analogy:
      "Une boucle, c'est comme une chorégraphie répétée. La boucle `for`, c'est « fais 10 sauts » : tu connais le nombre. La boucle `while`, c'est « saute tant que la musique joue » : tu ne sais pas combien de fois, tu t'arrêtes quand la condition change.",
  },
  codeExample: {
    title: "Boucle for : compter de 0 à 4",
    language: "python",
    code: `for i in range(5):
    print("Tour numéro", i)`,
    output: `Tour numéro 0
Tour numéro 1
Tour numéro 2
Tour numéro 3
Tour numéro 4`,
  },
  examples: [
    {
      title: "Boucle while : un compte à rebours",
      language: "python",
      code: `compteur = 3
while compteur > 0:
    print(compteur)
    compteur = compteur - 1
print("Décollage !")`,
      output: `3
2
1
Décollage !`,
    },
    {
      title: "Additionner les nombres de 1 à 5",
      language: "python",
      code: `total = 0
for n in range(1, 6):   # de 1 à 5
    total = total + n
print("La somme est", total)`,
      output: `La somme est 15`,
    },
  ],
  quiz: [
    {
      question: "Combien de fois s'exécute `for i in range(3):` ?",
      options: ["2 fois", "3 fois", "4 fois", "Une infinité"],
      correctIndex: 1,
      explanation: "`range(3)` génère 0, 1, 2 — soit 3 valeurs, donc 3 répétitions.",
    },
    {
      question: "Par quel nombre commence `range(5)` ?",
      options: ["0", "1", "5", "Ça dépend"],
      correctIndex: 0,
      explanation:
        "`range(5)` commence à 0 et s'arrête avant 5 : 0, 1, 2, 3, 4.",
    },
    {
      question:
        "Quelle boucle utiliser quand on ne connaît pas à l'avance le nombre de répétitions ?",
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
    {
      question:
        "Dans la boucle `compteur = compteur + 1`, à quoi sert cette ligne ?",
      options: [
        "À afficher le compteur",
        "À faire avancer le compteur pour finir par arrêter la boucle",
        "À remettre le compteur à zéro",
        "À rien du tout",
      ],
      correctIndex: 1,
      explanation:
        "Elle augmente le compteur à chaque tour. Sans elle, la condition resterait vraie pour toujours (boucle infinie).",
    },
  ],
};

export default lesson;
