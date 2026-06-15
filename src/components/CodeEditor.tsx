import { useState } from "react";
import { Play, Loader2, Terminal, AlertTriangle } from "lucide-react";
import { runPython } from "../utils/pyodide";
import { runJavaScript } from "../utils/runJs";
import type { RunResult } from "../utils/pyodide";

type Props = {
  initialCode: string;
  language: "python" | "javascript";
  onRun?: () => void;
};

// Éditeur de code (textarea) + bouton Exécuter + console de sortie.
// Python via Pyodide (chargé à la première exécution), JS via Function().
export default function CodeEditor({ initialCode, language, onRun }: Props) {
  const [code, setCode] = useState(initialCode);
  const [running, setRunning] = useState(false);
  const [loadingPy, setLoadingPy] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);

  const handleRun = async () => {
    setRunning(true);
    setResult(null);
    onRun?.();
    try {
      if (language === "python") {
        // Banner de chargement de l'interpréteur au premier lancement.
        setLoadingPy(true);
        const res = await runPython(code);
        setLoadingPy(false);
        setResult(res);
      } else {
        const res = runJavaScript(code);
        setResult(res);
      }
    } catch (e) {
      setLoadingPy(false);
      setResult({
        output: "",
        error: e instanceof Error ? e.message : String(e),
      });
    } finally {
      setRunning(false);
    }
  };

  // Gestion de la touche Tab dans le textarea (insère 4 espaces).
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const next = code.slice(0, start) + "    " + code.slice(end);
      setCode(next);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 4;
      });
    }
  };

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {language}
          </span>
          <button
            onClick={handleRun}
            disabled={running}
            className="btn-primary !py-1.5 !text-xs"
          >
            {running ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
            Exécuter
          </button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          rows={Math.max(8, code.split("\n").length + 1)}
          className="code-block w-full resize-y bg-slate-900 p-4 text-sm leading-relaxed text-slate-100 outline-none"
        />
      </div>

      {loadingPy && (
        <div className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
          <Loader2 className="h-4 w-4 animate-spin" />
          Chargement de l'interpréteur Python… (quelques secondes au premier
          lancement)
        </div>
      )}

      {result && (
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-900">
            <Terminal className="h-3.5 w-3.5" />
            Console
          </div>
          <pre className="code-block max-h-72 overflow-auto bg-slate-950 p-4 text-sm leading-relaxed text-slate-100">
            {result.output && <span>{result.output}</span>}
            {result.error && (
              <span className="flex items-start gap-2 text-red-400">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{result.error}</span>
              </span>
            )}
            {!result.output && !result.error && (
              <span className="text-slate-500">
                (aucune sortie — utilise print() ou console.log())
              </span>
            )}
          </pre>
        </div>
      )}
    </div>
  );
}
