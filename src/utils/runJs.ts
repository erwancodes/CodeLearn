import type { RunResult } from "./pyodide";

// Exécute du JavaScript dans une fonction isolée en capturant console.log.
// Note : ce n'est PAS un vrai sandbox de sécurité (cf. PRD : usage local mono-utilisateur).
export function runJavaScript(code: string): RunResult {
  const logs: string[] = [];
  const fakeConsole = {
    log: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
    error: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
    warn: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
    info: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
  };

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("console", `"use strict";\n${code}`);
    fn(fakeConsole);
    return { output: logs.join("\n"), error: null };
  } catch (e) {
    const message = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    return { output: logs.join("\n"), error: message };
  }
}

function format(value: unknown): string {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
