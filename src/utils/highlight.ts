// Coloration syntaxique très légère (sans dépendance) pour l'affichage en
// lecture seule. Le contenu est statique et de confiance (data/lessons),
// l'usage de HTML est donc sûr ici.

const KEYWORDS: Record<string, string[]> = {
  python: [
    "def", "return", "if", "elif", "else", "for", "while", "in", "and", "or",
    "not", "True", "False", "None", "import", "from", "as", "with", "print",
    "range", "len", "sum", "open",
  ],
  javascript: [
    "let", "const", "var", "function", "return", "if", "else", "for", "while",
    "true", "false", "null", "undefined", "console", "new",
  ],
  css: [],
  html: [],
  bash: [
    "docker", "run", "build", "ps", "stop", "start", "rm", "rmi", "images",
    "pull", "push", "exec", "logs", "compose", "up", "down",
  ],
  dockerfile: [
    "FROM", "RUN", "CMD", "COPY", "ADD", "WORKDIR", "EXPOSE", "ENV",
    "ENTRYPOINT", "ARG", "LABEL", "VOLUME",
  ],
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const C = {
  comment: "#6b7280", // gris
  string: "#16a34a", // vert
  number: "#d97706", // ambre
  keyword: "#2563eb", // bleu
  tag: "#db2777", // rose (html)
};

function span(color: string, content: string): string {
  return `<span style="color:${color}">${content}</span>`;
}

export function highlight(code: string, language: string): string {
  const escaped = escapeHtml(code);

  if (language === "html") {
    // Colore les balises.
    return escaped.replace(/(&lt;\/?[a-zA-Z0-9]+)([^&]*?)(&gt;)/g, (_m, a, b, c) =>
      span(C.tag, a) + b + span(C.tag, c),
    );
  }

  if (language === "css") {
    return escaped
      .replace(/(\/\*[\s\S]*?\*\/)/g, (m) => span(C.comment, m))
      .replace(/([a-z-]+)(\s*:)/g, (_m, p, s) => span(C.keyword, p) + s);
  }

  // python / javascript / bash / dockerfile : ligne par ligne pour les commentaires.
  const hashComment =
    language === "python" || language === "bash" || language === "dockerfile";
  const commentToken = hashComment ? "#" : "//";
  const keywords = KEYWORDS[language] ?? [];
  const kwRegex = keywords.length
    ? new RegExp(`\\b(${keywords.join("|")})\\b`, "g")
    : null;

  return escaped
    .split("\n")
    .map((line) => {
      const idx = line.indexOf(commentToken);
      let codePart = line;
      let commentPart = "";
      if (idx >= 0) {
        codePart = line.slice(0, idx);
        commentPart = line.slice(idx);
      }

      // chaînes de caractères
      codePart = codePart.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|"[^"]*"|'[^']*')/g, (m) =>
        span(C.string, m),
      );
      // nombres
      codePart = codePart.replace(/\b(\d+(?:\.\d+)?)\b/g, (m) => span(C.number, m));
      // mots-clés
      if (kwRegex) {
        codePart = codePart.replace(kwRegex, (m) => span(C.keyword, m));
      }

      return codePart + (commentPart ? span(C.comment, commentPart) : "");
    })
    .join("\n");
}
