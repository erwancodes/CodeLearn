import type { Exercise } from "../types";

// Exercices libres associés aux leçons "projet".
export const EXERCISES: Exercise[] = [
  {
    id: "ex-05",
    moduleId: "module-1",
    lessonId: "05-projet",
    title: "Mini projet : la calculatrice de moyenne",
    language: "python",
    statement: `Écris un programme qui :

1. Crée une **liste** de notes (au moins 3).
2. Définit une **fonction** \`moyenne(notes)\` qui calcule la moyenne (utilise une **boucle** ou \`sum()\`).
3. Affiche la moyenne.
4. Utilise une **condition** pour afficher "Admis" si la moyenne >= 10, sinon "Recalé".

Tu combines ainsi variables, listes, fonction, boucle et condition !`,
    starterCode: `notes = [12, 8, 15]

def moyenne(notes):
    # calcule et renvoie la moyenne
    total = 0
    for n in notes:
        total = total + n
    return total / len(notes)

m = moyenne(notes)
print("Moyenne :", m)

# À toi : ajoute la condition Admis / Recalé
`,
    solution: `notes = [12, 8, 15]

def moyenne(notes):
    total = 0
    for n in notes:
        total = total + n
    return total / len(notes)

m = moyenne(notes)
print("Moyenne :", m)

if m >= 10:
    print("Admis")
else:
    print("Recalé")
`,
  },
  {
    id: "ex-09",
    moduleId: "module-2",
    lessonId: "09-projet",
    title: "Mini projet CSV : analyse des agents",
    language: "python",
    statement: `On te donne une liste de **dictionnaires** représentant des agents de la mairie.

1. Parcours la liste pour calculer le **salaire moyen**.
2. Trouve l'agent ayant le **salaire le plus élevé**.
3. Affiche les deux résultats.

Indice : utilise une boucle \`for\` et garde en mémoire le maximum trouvé.`,
    starterCode: `agents = [
    {"nom": "Dupont", "service": "Accueil", "salaire": 2100},
    {"nom": "Martin", "service": "Technique", "salaire": 2400},
    {"nom": "Bernard", "service": "Compta", "salaire": 2250},
]

# 1. Salaire moyen
# 2. Agent le mieux payé
# À toi de jouer !
`,
    solution: `agents = [
    {"nom": "Dupont", "service": "Accueil", "salaire": 2100},
    {"nom": "Martin", "service": "Technique", "salaire": 2400},
    {"nom": "Bernard", "service": "Compta", "salaire": 2250},
]

total = 0
mieux_paye = agents[0]
for a in agents:
    total = total + a["salaire"]
    if a["salaire"] > mieux_paye["salaire"]:
        mieux_paye = a

moyenne = total / len(agents)
print("Salaire moyen :", moyenne)
print("Mieux payé :", mieux_paye["nom"], mieux_paye["salaire"])
`,
  },
  {
    id: "ex-13",
    moduleId: "module-3",
    lessonId: "13-projet",
    title: "Projet final : ta page de présentation",
    language: "javascript",
    statement: `Écris un programme **JavaScript** qui se présente :

1. Crée des variables : \`prenom\`, \`age\`, et une liste \`hobbies\`.
2. Écris une **fonction** \`presentation(prenom, age)\` qui renvoie une phrase.
3. Affiche la présentation avec \`console.log()\`.
4. Parcours la liste \`hobbies\` avec une **boucle** et affiche chaque hobby.
5. Ajoute une **condition** : affiche "Majeur" ou "Mineur" selon l'âge.`,
    starterCode: `let prenom = "Alex";
let age = 20;
let hobbies = ["lecture", "vélo", "code"];

function presentation(prenom, age) {
  return "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
}

console.log(presentation(prenom, age));

// À toi : boucle sur les hobbies + condition majeur/mineur
`,
    solution: `let prenom = "Alex";
let age = 20;
let hobbies = ["lecture", "vélo", "code"];

function presentation(prenom, age) {
  return "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
}

console.log(presentation(prenom, age));

for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby : " + hobbies[i]);
}

if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
`,
  },
];

const EX_MAP: Record<string, Exercise> = Object.fromEntries(
  EXERCISES.map((e) => [e.id, e]),
);

export function getExercise(exerciseId: string): Exercise | undefined {
  return EX_MAP[exerciseId];
}
