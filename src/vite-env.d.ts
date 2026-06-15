/// <reference types="vite/client" />

interface Window {
  loadPyodide?: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
}

interface PyodideInterface {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (msg: string) => void }) => void;
  setStderr: (options: { batched: (msg: string) => void }) => void;
  globals: { get: (name: string) => unknown };
}
