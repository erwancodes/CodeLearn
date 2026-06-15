import { highlight } from "../utils/highlight";

type Props = {
  code: string;
  language: string;
};

// Affichage de code en lecture seule, avec coloration légère.
export default function CodeViewer({ code, language }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          {language}
        </span>
      </div>
      <pre className="code-block overflow-x-auto p-4 text-sm leading-relaxed text-slate-100">
        <code dangerouslySetInnerHTML={{ __html: highlight(code, language) }} />
      </pre>
    </div>
  );
}
