import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Eye,
  Monitor,
  Paintbrush,
  RotateCcw,
  Smartphone,
  Sparkles,
  Braces,
} from "lucide-react";
import { getModule } from "../data/modules";
import { getLesson } from "../data/lessons";
import { useProgress } from "../store/useProgress";
import Markdown from "../components/Markdown";
import XPBadge from "../components/XPBadge";

type CodeTab = "html" | "css" | "js";
type MobileView = "editor" | "preview";
type Device = "desktop" | "mobile";

function buildDoc(html: string, css: string, js: string): string {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
*{box-sizing:border-box;}
body{margin:0;padding:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
${css}
</style>
</head>
<body>
${html}
${js ? `<script>\n${js}\n<\/script>` : ""}
</body>
</html>`;
}

export default function WebBuilder() {
  const { moduleId = "", lessonId = "" } = useParams();
  const navigate = useNavigate();

  const lesson = getLesson(lessonId);
  const mod = getModule(moduleId);
  const spec = lesson?.webBuilder;
  const hasJs = spec?.js !== undefined;

  const unlocked = useProgress((s) => s.isLessonUnlocked(moduleId, lessonId));
  const completeLesson = useProgress((s) => s.completeLesson);

  const storageKey = `codelearn_site_${lessonId}`;

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [codeTab, setCodeTab] = useState<CodeTab>("html");
  const [mobileView, setMobileView] = useState<MobileView>("editor");
  const [device, setDevice] = useState<Device>("desktop");
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  // Initialise depuis localStorage (travail sauvegardé) ou le code de départ.
  useEffect(() => {
    if (!spec) return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as {
          html: string;
          css: string;
          js?: string;
        };
        setHtml(parsed.html ?? spec.html);
        setCss(parsed.css ?? spec.css);
        setJs(parsed.js ?? spec.js ?? "");
        return;
      }
    } catch {
      /* ignore */
    }
    setHtml(spec.html);
    setCss(spec.css);
    setJs(spec.js ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  // Sauvegarde automatique du travail.
  useEffect(() => {
    if (!spec) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ html, css, js }));
    } catch {
      /* ignore */
    }
  }, [html, css, js, spec, storageKey]);

  const srcDoc = useMemo(() => buildDoc(html, css, js), [html, css, js]);

  if (!lesson || !mod || !spec || lesson.moduleId !== moduleId) {
    return <Navigate to="/dashboard" replace />;
  }
  if (!unlocked) {
    return <Navigate to={`/module/${moduleId}`} replace />;
  }

  const resetCode = () => {
    if (confirm("Remettre le code de départ ? Ton travail actuel sera perdu.")) {
      setHtml(spec.html);
      setCss(spec.css);
      setJs(spec.js ?? "");
    }
  };

  const handleFinish = () => {
    const { xpGained } = completeLesson(moduleId, lessonId, 100, lesson.xp);
    setXpGained(xpGained);
    setDone(true);
  };

  const currentValue = codeTab === "html" ? html : codeTab === "css" ? css : js;
  const setCurrent = (v: string) => {
    if (codeTab === "html") setHtml(v);
    else if (codeTab === "css") setCss(v);
    else setJs(v);
  };

  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const el = e.currentTarget;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const next = currentValue.slice(0, start) + "  " + currentValue.slice(end);
    setCurrent(next);
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = start + 2;
    });
  };

  // Onglets disponibles (JS seulement si la leçon en propose).
  const tabs = [
    { key: "html" as const, label: "HTML", icon: Code2 },
    { key: "css" as const, label: "CSS", icon: Paintbrush },
    ...(hasJs ? [{ key: "js" as const, label: "JS", icon: Braces }] : []),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <Link
        to={`/module/${moduleId}`}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" />
        {mod.title}
      </Link>

      <header className="mb-4">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700 dark:bg-pink-500/10 dark:text-pink-300">
          <Sparkles className="h-4 w-4" />
          Atelier · {lesson.xp} XP
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">{spec.title}</h1>
      </header>

      {/* Consignes */}
      <section className="card mb-4 p-4">
        <h2 className="mb-1 text-base font-bold">Consignes</h2>
        <Markdown text={spec.statement} />
      </section>

      {/* Barre d'onglets mobile */}
      <div
        className="mb-3 grid gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 lg:hidden"
        style={{ gridTemplateColumns: `repeat(${tabs.length + 1}, minmax(0, 1fr))` }}
      >
        {tabs.map((t) => {
          const active = mobileView === "editor" && codeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => {
                setMobileView("editor");
                setCodeTab(t.key);
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition ${
                active
                  ? "bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300"
                  : "text-slate-500"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
        <button
          onClick={() => setMobileView("preview")}
          className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition ${
            mobileView === "preview"
              ? "bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300"
              : "text-slate-500"
          }`}
        >
          <Eye className="h-4 w-4" />
          Aperçu
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* Colonne éditeur */}
        <div
          className={`${
            mobileView === "preview" ? "hidden" : "block"
          } lg:block`}
        >
          {/* Bascule onglets (desktop) */}
          <div className="mb-2 hidden gap-1 lg:flex">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setCodeTab(t.key)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  codeTab === t.key
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
            <button
              onClick={resetCode}
              className="ml-auto flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-500 hover:text-red-600"
            >
              <RotateCcw className="h-4 w-4" /> Réinitialiser
            </button>
          </div>

          <textarea
            value={currentValue}
            onChange={(e) => setCurrent(e.target.value)}
            onKeyDown={handleTab}
            spellCheck={false}
            className="code-block h-[55vh] w-full resize-none rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-relaxed text-slate-100 outline-none lg:h-[60vh]"
            placeholder={`Ton ${codeTab.toUpperCase()} ici…`}
          />

          {/* Réinitialiser (mobile) */}
          <button
            onClick={resetCode}
            className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-red-600 lg:hidden"
          >
            <RotateCcw className="h-4 w-4" /> Réinitialiser le code
          </button>
        </div>

        {/* Colonne aperçu */}
        <div
          className={`${
            mobileView === "editor" ? "hidden" : "block"
          } lg:block`}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">
              Aperçu en direct
            </span>
            <div className="flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
              <button
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  device === "desktop"
                    ? "bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300"
                    : "text-slate-500"
                }`}
                title="Aperçu bureau"
              >
                <Monitor className="h-4 w-4" /> Bureau
              </button>
              <button
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  device === "mobile"
                    ? "bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300"
                    : "text-slate-500"
                }`}
                title="Aperçu mobile (iPhone)"
              >
                <Smartphone className="h-4 w-4" /> Mobile
              </button>
            </div>
          </div>

          <div className="flex h-[55vh] items-start justify-center overflow-auto rounded-xl border border-slate-200 bg-slate-100 p-3 dark:border-slate-800 dark:bg-slate-800 lg:h-[60vh]">
            <div
              className={`${
                device === "mobile"
                  ? "w-[390px] max-w-full rounded-[2rem] border-[10px] border-slate-900 shadow-xl"
                  : "w-full rounded-lg border border-slate-200 dark:border-slate-700"
              } h-full overflow-hidden bg-white`}
            >
              <iframe
                title="Aperçu du site"
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-same-origin"
                className="h-full w-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Validation */}
      <div className="mt-6">
        {!done ? (
          <button onClick={handleFinish} className="btn-primary w-full sm:w-auto">
            <CheckCircle2 className="h-4 w-4" />
            Marquer comme terminé
          </button>
        ) : (
          <div className="card animate-fade-in p-6 text-center">
            <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-500" />
            <h3 className="text-xl font-bold">Ton site est validé, bravo !</h3>
            {xpGained > 0 ? (
              <div className="mt-4 flex justify-center">
                <XPBadge xp={xpGained} />
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-400">
                (XP déjà gagnée précédemment)
              </p>
            )}
            <button
              onClick={() => navigate(`/module/${moduleId}`)}
              className="btn-primary mt-6"
            >
              Retour au module
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
