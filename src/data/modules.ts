import type { ModuleDef } from "../types";

// Définition statique de tous les modules et de l'ordre des leçons.
export const MODULES: ModuleDef[] = [
  {
    id: "module-1",
    title: "Les bases absolues",
    description:
      "Variables, conditions, boucles et fonctions. Le socle indispensable pour tout programmeur.",
    order: 1,
    lessonIds: [
      "01-variables",
      "02-conditions",
      "03-boucles",
      "04-fonctions",
      "05-projet",
    ],
  },
  {
    id: "module-2",
    title: "Structures de données",
    description:
      "Listes, dictionnaires et fichiers. Stocker et manipuler plusieurs valeurs à la fois.",
    order: 2,
    lessonIds: ["06-listes", "07-dicts", "08-fichiers", "09-projet"],
  },
  {
    id: "module-3",
    title: "Le Web",
    description:
      "HTML, CSS et JavaScript. Construire ta première page web de A à Z.",
    order: 3,
    lessonIds: ["10-html", "11-css", "12-js", "13-projet"],
  },
  {
    id: "module-4",
    title: "Crée ton site web",
    description:
      "Construis ta propre page web en HTML et CSS, avec un aperçu en direct. Pensé pour bien s'afficher sur mobile (iPhone inclus).",
    order: 4,
    lessonIds: [
      "14-page-complete",
      "15-styliser",
      "16-responsive",
      "17-mon-site",
    ],
  },
  {
    id: "module-5",
    title: "Web avancé : du style qui claque",
    description:
      "Passe au niveau supérieur avec Flexbox, les effets au survol, les dégradés, les ombres et les animations CSS. Que des ateliers, aperçu en direct.",
    order: 5,
    lessonIds: [
      "18-flexbox",
      "19-boutons-hover",
      "20-cartes-degrades",
      "21-animations",
      "22-projet-portfolio",
    ],
  },
  {
    id: "module-6",
    title: "JavaScript : rends ta page vivante",
    description:
      "Le JavaScript débarque dans l'atelier ! Réagis aux clics, compte, affiche/cache, et crée tes premières pages interactives.",
    order: 6,
    lessonIds: [
      "23-js-clic",
      "24-js-compteur",
      "25-js-afficher-cacher",
      "26-js-projet",
    ],
  },
  {
    id: "module-7",
    title: "Crée un mini-jeu",
    description:
      "Programme de vrais petits jeux dans le navigateur : cliqueur, quiz, et pierre-feuille-ciseaux contre l'ordinateur.",
    order: 7,
    lessonIds: ["27-jeu-clicker", "28-jeu-quiz", "29-jeu-projet"],
  },
  {
    id: "module-8",
    title: "Le défi final",
    description:
      "Le boss de fin : une landing page pro, une to-do list interactive, et ton site complet stylé et animé.",
    order: 8,
    lessonIds: ["30-defi-landing", "31-defi-todo", "32-defi-final"],
  },
  {
    id: "module-special",
    title: "Module Spécial : Docker",
    description:
      "Docker expliqué tout simplement : mets une appli dans une boîte qui marche partout. Accessible à tout moment, aucune base requise.",
    order: 9,
    special: true,
    lessonIds: [
      "docker-01-cest-quoi",
      "docker-02-images-conteneurs",
      "docker-03-commandes",
      "docker-04-dockerfile",
    ],
  },
];

export function getModule(moduleId: string): ModuleDef | undefined {
  return MODULES.find((m) => m.id === moduleId);
}

// Module précédent (selon l'ordre) ou undefined pour le premier.
export function getPreviousModule(moduleId: string): ModuleDef | undefined {
  const mod = getModule(moduleId);
  if (!mod) return undefined;
  return MODULES.find((m) => m.order === mod.order - 1);
}
