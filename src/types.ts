// Types partagés de l'application CodeLearn

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type CodeLang =
  | "python"
  | "html"
  | "css"
  | "javascript"
  | "bash"
  | "dockerfile";

export type CodeSample = {
  title?: string; // Titre optionnel affiché au-dessus de l'exemple
  language: CodeLang;
  code: string;
  output: string;
};

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  xp: number;
  concept: {
    text: string; // Markdown léger
    analogy: string; // Analogie courte affichée dans une box
  };
  codeExample: CodeSample;
  examples?: CodeSample[]; // Exemples supplémentaires (optionnel)
  quiz: QuizQuestion[];
  exerciseId?: string;
};

export type Exercise = {
  id: string;
  moduleId: string;
  lessonId: string;
  title: string;
  statement: string; // Énoncé en markdown léger
  language: "python" | "javascript";
  starterCode: string;
  solution: string;
};

export type ModuleDef = {
  id: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  special?: boolean; // Module bonus toujours déverrouillé
};

// --- localStorage shapes (cf. PRD) ---

export type LessonProgress = {
  completed: boolean;
  score: number; // 0 à 100
  attempts: number;
  completedAt: string; // ISO date
};

export type ModuleProgress = {
  completed: boolean;
  lessons: Record<string, LessonProgress>;
};

export type Progress = {
  modules: Record<string, ModuleProgress>;
  totalXP: number;
  streak: number;
  lastActiveDate: string; // ISO date
};

export type Settings = {
  username: string;
  theme: "light" | "dark";
};

export type Level = {
  name: string;
  min: number;
  max: number; // Infinity pour le dernier
};
