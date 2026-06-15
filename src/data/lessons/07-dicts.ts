import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "07-dicts",
  moduleId: "module-2",
  title: "Dictionnaires",
  xp: 25,
  concept: {
    text: `Avec une liste, on accède aux éléments par un **numéro** (l'indice). Mais parfois, on préférerait les retrouver par un **nom**. Par exemple, pour une fiche de personnage : son nom, sa vie, son niveau… C'est le rôle du **dictionnaire**.

Un **dictionnaire** associe des **clés** à des **valeurs**. On le crée avec des **accolades** \`{ }\`, et chaque entrée s'écrit \`clé: valeur\`.

\`\`\`python
joueur = {
    "nom": "Léa",
    "vie": 100,
    "niveau": 5
}
\`\`\`

**Lire une valeur** : on utilise la clé entre crochets.

\`\`\`python
print(joueur["nom"])   # Léa
\`\`\`

**Modifier ou ajouter** : on affecte une clé.

\`\`\`python
joueur["vie"] = 80      # modifie (la clé existe déjà)
joueur["arme"] = "épée" # ajoute (nouvelle clé)
\`\`\`

**Parcourir un dictionnaire** : avec \`.items()\`, on récupère la clé ET la valeur de chaque entrée.

\`\`\`python
for cle, valeur in joueur.items():
    print(cle, "=", valeur)
\`\`\`

**Liste ou dictionnaire ?**
- Plein d'éléments du même genre, dans un ordre → **liste** (\`[ ]\`)
- Des caractéristiques nommées d'une même chose → **dictionnaire** (\`{ }\`)`,
    analogy:
      "Un dictionnaire de programmation, c'est comme un vrai dictionnaire : tu cherches un mot (la clé) pour trouver sa définition (la valeur). Pas besoin de connaître le numéro de page : tu vas directement au mot. C'est aussi comme une fiche d'identité : la case « Nom », la case « Âge »…",
  },
  codeExample: {
    title: "Créer, lire, modifier et parcourir",
    language: "python",
    code: `personne = {
    "nom": "Dupont",
    "age": 28,
    "ville": "Les Andelys"
}

print(personne["nom"])

personne["age"] = 29   # on modifie l'âge

for cle, valeur in personne.items():
    print(cle, ":", valeur)`,
    output: `Dupont
nom : Dupont
age : 29
ville : Les Andelys`,
  },
  examples: [
    {
      title: "Une fiche de personnage de jeu",
      language: "python",
      code: `heros = {"nom": "Aria", "vie": 100}

heros["vie"] = heros["vie"] - 30   # il prend des dégâts
heros["arme"] = "arc"              # on ajoute une clé

print(heros["nom"], "a", heros["vie"], "PV")
print("Arme :", heros["arme"])`,
      output: `Aria a 70 PV
Arme : arc`,
    },
    {
      title: "Compter avec un dictionnaire",
      language: "python",
      code: `stock = {"pommes": 5, "poires": 3}

# Combien de fruits en tout ?
total = stock["pommes"] + stock["poires"]
print("Total :", total)`,
      output: `Total : 8`,
    },
  ],
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
    {
      question:
        'Avec `jeu = {"score": 0}`, comment ajouter une clé "vies" valant 3 ?',
      options: [
        'jeu.append("vies", 3)',
        'jeu["vies"] = 3',
        'jeu + "vies" = 3',
        'jeu("vies") = 3',
      ],
      correctIndex: 1,
      explanation:
        'On affecte simplement une nouvelle clé : `jeu["vies"] = 3`.',
    },
    {
      question:
        "Pour stocker les caractéristiques NOMMÉES d'une seule chose (nom, âge, ville), on utilise plutôt…",
      options: ["une liste", "un dictionnaire", "une boucle", "une fonction"],
      correctIndex: 1,
      explanation:
        "Le dictionnaire est parfait pour des caractéristiques nommées. La liste sert plutôt à plein d'éléments du même genre.",
    },
  ],
};

export default lesson;
