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
