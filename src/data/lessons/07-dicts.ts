import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "07-dicts",
  moduleId: "module-2",
  title: "Dictionnaires",
  xp: 25,
  concept: {
    text: `Un **dictionnaire** associe des **clés** à des **valeurs**. On le crée avec des accolades \`{ }\`.

Contrairement à une liste (accès par numéro), on accède ici par **clé** : \`personne["nom"]\`.

- Ajouter / modifier : \`personne["age"] = 30\`
- Parcourir : \`for cle, valeur in personne.items():\`

C'est parfait pour représenter un objet du monde réel avec ses caractéristiques.`,
    analogy:
      "Un dictionnaire de programmation, c'est comme un vrai dictionnaire : tu cherches un mot (la clé) pour trouver sa définition (la valeur). Pas besoin de connaître le numéro de page.",
  },
  codeExample: {
    language: "python",
    code: `personne = {
    "nom": "Dupont",
    "age": 28,
    "ville": "Les Andelys"
}

print(personne["nom"])

personne["age"] = 29

for cle, valeur in personne.items():
    print(cle, ":", valeur)`,
    output: `Dupont
nom : Dupont
age : 29
ville : Les Andelys`,
  },
  quiz: [
    {
      question: "Comment accède-t-on à une valeur dans un dictionnaire ?",
      options: [
        "Par son indice numérique",
        "Par sa clé",
        "Avec append()",
        "Avec une boucle while",
      ],
      correctIndex: 1,
      explanation:
        "Un dictionnaire associe clé → valeur ; on accède donc par la clé, pas par un numéro.",
    },
    {
      question: "Quels symboles délimitent un dictionnaire ?",
      options: ["[ ]", "( )", "{ }", "< >"],
      correctIndex: 2,
      explanation: "Les accolades `{ }` sont utilisées pour les dictionnaires.",
    },
    {
      question: 'Que fait `personne["age"] = 29` si la clé "age" existe déjà ?',
      options: [
        "Elle crée une deuxième clé age",
        "Elle remplace l'ancienne valeur",
        "Elle provoque une erreur",
        "Elle supprime la clé",
      ],
      correctIndex: 1,
      explanation: "Affecter une clé existante met simplement à jour sa valeur.",
    },
  ],
};

export default lesson;
