import type { CodeSample } from "../types";
import CodeViewer from "./CodeViewer";

// Affiche un exemple de code (lecture seule) suivi de son résultat attendu.
export default function ExampleBlock({ sample }: { sample: CodeSample }) {
  return (
    <div className="space-y-2">
      {sample.title && (
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          {sample.title}
        </h3>
      )}
      <CodeViewer code={sample.code} language={sample.language} />
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Résultat
        </p>
        <pre className="code-block overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          {sample.output}
        </pre>
      </div>
    </div>
  );
}
