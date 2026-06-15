// Chargement paresseux de Pyodide depuis le CDN.
// Le script n'est injecté qu'à la première exécution Python demandée.

const PYODIDE_VERSION = "0.26.2";
const CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodidePromise: Promise<PyodideInterface> | null = null;

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-pyodide]`,
    );
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.pyodide = "true";
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Impossible de charger Pyodide (connexion requise au premier lancement)."));
    document.head.appendChild(script);
  });
}

// Charge l'interpréteur (une seule fois) et le met en cache.
export function loadPyodideOnce(): Promise<PyodideInterface> {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = (async () => {
    await injectScript(`${CDN}pyodide.js`);
    if (!window.loadPyodide) {
      throw new Error("Pyodide indisponible après chargement du script.");
    }
    const py = await window.loadPyodide({ indexURL: CDN });
    return py;
  })();

  return pyodidePromise;
}

export type RunResult = {
  output: string;
  error: string | null;
};

// Exécute du code Python en capturant stdout et stderr.
export async function runPython(code: string): Promise<RunResult> {
  const py = await loadPyodideOnce();
  let buffer = "";
  py.setStdout({ batched: (msg) => (buffer += msg + "\n") });
  py.setStderr({ batched: (msg) => (buffer += msg + "\n") });

  try {
    await py.runPythonAsync(code);
    return { output: buffer, error: null };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return { output: buffer, error: message };
  }
}
