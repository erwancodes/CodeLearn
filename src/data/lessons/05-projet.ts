import type { Lesson } from "../../types";

export const lesson: Lesson = {
  id: "05-projet",
  moduleId: "module-1",
  title: "Mini projet final",
  xp: 50,
  concept: {
    text: `Bravo ! Tu as vu les **4 piliers** de la programmation :

- les **variables** (ranger des informations)
- les **conditions** (prendre des décisions)
- les **boucles** (répéter)
- les **fonctions** (réutiliser du code)

Avec ça, tu peux déjà écrire de vrais programmes ! Il est temps de **tout combiner**.

Pas de QCM ici : tu vas **écrire ton propre code** et l'**exécuter pour de vrai** dans le navigateur. Tu verras le résultat s'afficher, exactement comme un vrai développeur.

Pas de panique : un code de départ t'attend, tu n'écris pas tout depuis une page blanche. Et si tu bloques, la correction se débloque après 2 essais.

Clique sur **Ouvrir l'exercice** pour commencer.`,
    analogy:
      "Jusqu'ici tu as appris les notes une par une. Maintenant, tu joues ton premier vrai morceau du début à la fin.",
  },
  codeExample: {
    title: "Le genre de programme que tu vas écrire",
    language: "python",
    code: `# Tu vas combiner tout ce que tu as appris :
notes = [12, 8, 15]        # une variable (liste de nombres)

def moyenne(notes):        # une fonction
    total = 0
    for n in notes:        # une boucle
        total = total + n
    return total / len(notes)

m = moyenne(notes)
if m >= 10:                # une condition
    print("Admis")
else:
    print("Recalé")`,
    output: `Admis`,
  },
  quiz: [],
  exerciseId: "ex-05",
};

export default lesson;
