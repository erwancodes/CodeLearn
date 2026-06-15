import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "02-conditions",
  moduleId: "module-1",
  title: "if / elif / else",
  xp: 20,
  concept: {
    text: `Un programme doit souvent **prendre des décisions** : afficher "Gagné" ou "Perdu", laisser entrer quelqu'un ou non, etc. Pour ça, on utilise des **conditions**.

L'idée : on **teste** si quelque chose est vrai, et on exécute du code seulement dans ce cas.

\`\`\`python
if age >= 18:
    print("Tu es majeur")
\`\`\`

On lit ça comme une phrase : « **SI** l'âge est supérieur ou égal à 18, **ALORS** affiche... ».

**Les trois mots-clés**

- \`if\` (si) : teste une première condition.
- \`elif\` (sinon si) : teste une autre condition si la précédente était fausse. On peut en mettre plusieurs.
- \`else\` (sinon) : s'exécute quand **aucune** condition précédente n'était vraie.

**Les comparaisons**

- \`==\` : égal à
- \`!=\` : différent de
- \`<\` : plus petit que
- \`>\` : plus grand que
- \`<=\` : plus petit ou égal
- \`>=\` : plus grand ou égal

⚠️ Attention au piège : pour **comparer**, c'est \`==\` (double). Le \`=\` simple sert à ranger une valeur dans une variable.

**L'indentation, c'est obligatoire**

En Python, on décale le code vers la droite (avec 4 espaces) pour montrer qu'il **dépend** de la condition. Ce décalage s'appelle l'**indentation**. Sans lui, Python ne comprend pas ton code.`,
    analogy:
      "C'est comme un videur à l'entrée d'une soirée : SI tu es sur la liste, tu entres. SINON SI tu connais quelqu'un à l'intérieur, il vérifie. SINON, tu restes dehors. Le programme déroule exactement le même raisonnement, dans l'ordre, et s'arrête au premier cas qui correspond.",
  },
  codeExample: {
    title: "Une note transformée en appréciation",
    language: "python",
    code: `note = 14

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Passable")
else:
    print("Insuffisant")`,
    output: `Passable`,
  },
  examples: [
    {
      title: "Un simple if (sans else)",
      language: "python",
      code: `argent = 50
prix = 30

if argent >= prix:
    print("Achat possible !")
    print("Il te restera", argent - prix, "euros")`,
      output: `Achat possible !
Il te restera 20 euros`,
    },
    {
      title: "Combiner deux conditions avec 'and'",
      language: "python",
      code: `age = 16
accompagne = True

if age >= 18 or accompagne:
    print("Tu peux voir le film")
else:
    print("Film interdit")`,
      output: `Tu peux voir le film`,
    },
  ],
  quiz: [
    {
      question: "Quel mot-clé utilise-t-on pour « sinon, dans tous les autres cas » ?",
      options: ["elif", "otherwise", "else", "default"],
      correctIndex: 2,
      explanation: "`else` capture tous les cas non traités par `if` et `elif`.",
    },
    {
      question: "Comment teste-t-on si deux valeurs sont égales ?",
      options: ["=", "==", "equals", "->"],
      correctIndex: 1,
      explanation:
        "Le double `==` compare. Le simple `=` sert uniquement à ranger une valeur dans une variable.",
    },
    {
      question: "Qu'est-ce qui est obligatoire en Python après les `:` d'une condition ?",
      options: [
        "Un point-virgule",
        "Des accolades { }",
        "L'indentation (un décalage avec des espaces)",
        "Le mot-clé then",
      ],
      correctIndex: 2,
      explanation:
        "Python utilise l'indentation (le décalage) au lieu des accolades pour savoir quel code dépend de la condition.",
    },
    {
      question: "Que signifie le symbole `!=` ?",
      options: ["égal à", "différent de", "non valide", "plus petit que"],
      correctIndex: 1,
      explanation: "`!=` signifie « différent de ». Le `!` veut dire « non ».",
    },
    {
      question:
        "Avec `age = 12`, qu'affiche : `if age >= 18: print(\"Majeur\") else: print(\"Mineur\")` ?",
      options: ["Majeur", "Mineur", "Rien", "Une erreur"],
      correctIndex: 1,
      explanation:
        "12 n'est pas >= 18, donc la condition est fausse : c'est le `else` qui s'exécute → « Mineur ».",
    },
  ],
};

export default lesson;
