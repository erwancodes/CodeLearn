import { Fragment, type ReactNode } from "react";
import { highlight } from "../utils/highlight";

// Rendu d'un sous-ensemble de Markdown : titres légers via **gras**, `code`
// inline, listes "- ", et blocs de code ```lang. Suffisant pour le contenu
// pédagogique de l'app (pas de dépendance externe).

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // On découpe sur **gras** et `code`.
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(regex);
  parts.forEach((part, i) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(
        <strong key={i} className="font-semibold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>,
      );
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(
        <code
          key={i}
          className="code-block rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] text-brand-700 dark:bg-slate-800 dark:text-brand-300"
        >
          {part.slice(1, -1)}
        </code>,
      );
    } else {
      nodes.push(<Fragment key={i}>{part}</Fragment>);
    }
  });
  return nodes;
}

export default function Markdown({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  const lines = text.split("\n");
  let i = 0;
  let listBuffer: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`ul-${key++}`} className="my-2 list-disc space-y-1 pl-5">
        {listBuffer.map((item, idx) => (
          <li key={idx}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    // Bloc de code ```
    const fence = line.match(/^```(\w*)/);
    if (fence) {
      flushList();
      const lang = fence[1] || "text";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // saute la fermeture ```
      const code = codeLines.join("\n");
      blocks.push(
        <pre
          key={`code-${key++}`}
          className="code-block my-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-relaxed text-slate-100"
        >
          <code dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
        </pre>,
      );
      continue;
    }

    // Élément de liste
    if (/^\s*-\s+/.test(line)) {
      listBuffer.push(line.replace(/^\s*-\s+/, ""));
      i++;
      continue;
    }

    // Ligne vide
    if (line.trim() === "") {
      flushList();
      i++;
      continue;
    }

    // Paragraphe
    flushList();
    blocks.push(
      <p key={`p-${key++}`} className="my-2 leading-relaxed">
        {renderInline(line)}
      </p>,
    );
    i++;
  }
  flushList();

  return <div className="text-slate-700 dark:text-slate-300">{blocks}</div>;
}
