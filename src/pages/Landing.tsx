import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Github,
  Globe,
  Boxes,
  Trophy,
  WifiOff,
  Terminal,
  Play,
  Check,
  Layers,
  ChevronRight,
} from "lucide-react";
import { useProgress } from "../store/useProgress";
import { MODULES } from "../data/modules";
import Reveal from "../components/Reveal";

const TOTAL_LESSONS = MODULES.reduce((n, m) => n + m.lessonIds.length, 0);

const STATS = [
  { value: String(MODULES.length), label: "modules" },
  { value: String(TOTAL_LESSONS), label: "leçons" },
  { value: "4", label: "langages" },
  { value: "0", label: "installation" },
];

export default function Landing() {
  const username = useProgress((s) => s.settings.username);
  const start = username ? "/dashboard" : "/";

  return (
    <div className="min-h-[100dvh] bg-zinc-950 font-display text-zinc-100 antialiased">
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="flex items-center gap-2 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <Code2 className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-lg tracking-tight">CodeLearn</span>
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/erwancodes/CodeLearn"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-zinc-400 transition hover:text-white sm:inline-flex"
            >
              <Github className="h-4 w-4" strokeWidth={2} />
              Code source
            </a>
            <Link
              to={start}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition active:scale-[0.98] hover:bg-zinc-200"
            >
              Commencer
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        {/* fond : grille subtile + halo bleu discret */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28">
          {/* Colonne texte (gauche) */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Gratuit, local, sans compte
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
              Apprends à coder
              <br />
              <span className="text-brand-500">dans ton navigateur.</span>
            </h1>

            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-zinc-400 sm:text-lg">
              CodeLearn t'emmène des toutes premières variables jusqu'à ton
              propre site web. Des leçons courtes, des quiz, et un vrai éditeur
              qui exécute Python et JavaScript — sans rien installer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={start}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition active:scale-[0.98] hover:bg-brand-500"
              >
                {username ? "Reprendre" : "Commencer gratuitement"}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
              <a
                href="#modules"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-zinc-200 transition hover:bg-white/10"
              >
                Voir le programme
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid max-w-md grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-zinc-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne visuel (droite) : maquette éditeur + aperçu */}
          <Reveal delay={120} className="lg:pl-6">
            <HeroMock />
          </Reveal>
        </div>
      </section>

      {/* ---------- FEATURES (BENTO) ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Ce que tu peux faire
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tighter sm:text-4xl">
            Un terrain de jeu complet pour débuter
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Aperçu en direct (large) */}
          <Reveal className="md:col-span-4">
            <FeatureCard
              icon={<Globe className="h-5 w-5" strokeWidth={2} />}
              title="Construis ton site, aperçu en direct"
              desc="Écris du HTML/CSS et vois le résultat se mettre à jour instantanément. Une bascule Bureau/Mobile vérifie le rendu sur iPhone."
            >
              <BrowserMock />
            </FeatureCard>
          </Reveal>

          {/* Python navigateur */}
          <Reveal delay={80} className="md:col-span-2">
            <FeatureCard
              icon={<Terminal className="h-5 w-5" strokeWidth={2} />}
              title="Du vrai Python"
              desc="Le code s'exécute dans l'onglet, via Pyodide. Pas d'installation."
            >
              <div className="mt-4 rounded-xl border border-white/10 bg-zinc-950 p-3 font-mono text-xs leading-relaxed">
                <span className="text-zinc-500"># test.py</span>
                <br />
                <span className="text-brand-400">print</span>
                <span className="text-zinc-300">(</span>
                <span className="text-emerald-400">"Bonjour 👋"</span>
                <span className="text-zinc-300">)</span>
                <div className="mt-2 text-emerald-400">{">"} Bonjour</div>
              </div>
            </FeatureCard>
          </Reveal>

          {/* XP */}
          <Reveal delay={120} className="md:col-span-2">
            <FeatureCard
              icon={<Trophy className="h-5 w-5" strokeWidth={2} />}
              title="XP, niveaux & streak"
              desc="Chaque leçon rapporte de l'XP. Monte de Débutant à Senior."
            >
              <div className="mt-4">
                <div className="mb-1.5 flex justify-between text-xs text-zinc-400">
                  <span>Apprenti</span>
                  <span className="font-mono">240 XP</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-brand-500" />
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          {/* Docker */}
          <Reveal delay={80} className="md:col-span-2">
            <FeatureCard
              icon={<Boxes className="h-5 w-5" strokeWidth={2} />}
              title="Module Spécial Docker"
              desc="Les conteneurs expliqués simplement, dès 15 ans."
            >
              <div className="mt-4 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-10 flex-1 rounded-lg border border-white/10 bg-white/5"
                    style={{ opacity: 1 - i * 0.25 }}
                  />
                ))}
              </div>
            </FeatureCard>
          </Reveal>

          {/* Offline / local (large) */}
          <Reveal delay={120} className="md:col-span-4">
            <FeatureCard
              icon={<WifiOff className="h-5 w-5" strokeWidth={2} />}
              title="100% hors-ligne, 100% à toi"
              desc="Aucun serveur, aucune donnée envoyée. Ta progression vit dans ton navigateur. Idéal pour apprendre tranquillement, même sans connexion."
            >
              <div className="mt-4 flex flex-wrap gap-2">
                {["Pas de compte", "Pas de pub", "Open source", "Mobile"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      <Check className="h-3.5 w-3.5 text-brand-400" strokeWidth={2} />
                      {t}
                    </span>
                  ),
                )}
              </div>
            </FeatureCard>
          </Reveal>
        </div>
      </section>

      {/* ---------- MODULES ---------- */}
      <section id="modules" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Le programme
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tighter sm:text-4xl">
            {MODULES.length} modules, du débutant au premier site
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {MODULES.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}>
              <Link
                to={start}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand-600/10 font-mono text-lg font-bold text-brand-400">
                  {m.special ? "★" : String(m.order).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold tracking-tight">{m.title}</h3>
                    {m.special && (
                      <span className="rounded-full bg-brand-600/15 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-400">
                        Bonus
                      </span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                    {m.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-zinc-500">
                    <Layers className="h-3.5 w-3.5" strokeWidth={2} />
                    {m.lessonIds.length} leçons
                  </span>
                </div>
                <ChevronRight
                  className="ml-auto h-5 w-5 shrink-0 self-center text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-zinc-300"
                  strokeWidth={2}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- COMMENT ÇA MARCHE ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              Comment ça marche
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-4xl">
              Quatre étapes, zéro friction
            </h2>
            <p className="mt-4 max-w-[55ch] text-zinc-400">
              Pensé pour un grand débutant : tu avances à ton rythme, sans
              pression et sans configuration.
            </p>
            <Link
              to={start}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-500"
            >
              {username ? "Reprendre" : "Lancer ma première leçon"}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>

          <div className="space-y-2">
            {[
              {
                t: "Entre ton prénom",
                d: "Aucun compte, aucun mot de passe. Juste toi et le code.",
              },
              {
                t: "Suis les leçons et les quiz",
                d: "Concept, analogie, exemples, puis questions pour ancrer l'idée.",
              },
              {
                t: "Code pour de vrai",
                d: "Exécute du Python/JS et construis ta page web avec aperçu en direct.",
              },
              {
                t: "Gagne de l'XP",
                d: "Débloque les modules suivants et grimpe les niveaux.",
              },
            ].map((step, i) => (
              <Reveal key={step.t} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="font-mono text-sm font-bold text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{step.t}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{step.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="px-4 pb-24 pt-8 sm:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-16 text-center shadow-[0_30px_80px_-30px_rgba(37,99,235,0.4)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/25 blur-[100px]"
            />
            <h2 className="relative text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Écris ta première ligne de code aujourd'hui
            </h2>
            <p className="relative mx-auto mt-4 max-w-[50ch] text-zinc-400">
              C'est gratuit, ça tourne dans ton navigateur, et tu peux commencer
              en moins de dix secondes.
            </p>
            <Link
              to={start}
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-zinc-950 transition active:scale-[0.98] hover:bg-zinc-200"
            >
              <Play className="h-4 w-4" strokeWidth={2} />
              {username ? "Reprendre ma progression" : "Commencer maintenant"}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
          <span className="flex items-center gap-2">
            <Code2 className="h-4 w-4" strokeWidth={2} />
            CodeLearn — apprendre à coder, simplement.
          </span>
          <a
            href="https://github.com/erwancodes/CodeLearn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
            github.com/erwancodes/CodeLearn
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Sous-composants ---------- */

function FeatureCard({
  icon,
  title,
  desc,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-brand-600/10 text-brand-400">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{desc}</p>
      {children}
    </div>
  );
}

// Maquette principale : éditeur de leçon + aperçu (hero).
function HeroMock() {
  return (
    <div className="animate-float-slow rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] [will-change:transform]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
        {/* barre fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs text-zinc-500">lesson · variables</span>
        </div>
        <div className="grid grid-cols-2">
          {/* code */}
          <div className="border-r border-white/10 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
            <div>
              <span className="text-brand-400">name</span>
              <span className="text-zinc-400"> = </span>
              <span className="text-emerald-400">"Maelys"</span>
            </div>
            <div>
              <span className="text-brand-400">age</span>
              <span className="text-zinc-400"> = </span>
              <span className="text-amber-400">15</span>
            </div>
            <div className="mt-1">
              <span className="text-brand-400">print</span>
              <span className="text-zinc-300">(name, age)</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-zinc-500">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              exécution…
            </div>
            <div className="mt-1 text-emerald-400">Maelys 15</div>
          </div>
          {/* aperçu */}
          <div className="bg-zinc-900 p-4">
            <div className="mb-2 text-[10px] uppercase tracking-widest text-zinc-500">
              Aperçu
            </div>
            <div className="rounded-xl border border-white/10 bg-white p-3 text-zinc-900">
              <div className="text-sm font-bold">Salut, moi c'est Maelys</div>
              <div className="mt-0.5 text-[11px] text-zinc-500">
                15 ans · apprend à coder
              </div>
              <div className="mt-3 inline-block rounded-full bg-brand-600 px-3 py-1 text-[10px] font-semibold text-white">
                Me contacter
              </div>
            </div>
          </div>
        </div>
        {/* barre XP */}
        <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
          <Trophy className="h-4 w-4 text-amber-400" strokeWidth={2} />
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-brand-500" />
          </div>
          <span className="font-mono text-[10px] text-zinc-400">+20 XP</span>
        </div>
      </div>
    </div>
  );
}

// Mini navigateur pour la carte "aperçu en direct".
function BrowserMock() {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-2 flex-1 rounded-md bg-white/5 px-2 py-1 text-[10px] text-zinc-500">
          mon-site.local
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 border-r border-white/10 p-3 font-mono text-[10px] leading-relaxed text-zinc-400">
          <div className="text-pink-400">.carte</div>
          <div>{"{"}</div>
          <div className="pl-3">background: #fff;</div>
          <div className="pl-3">radius: 20px;</div>
          <div>{"}"}</div>
          <div className="mt-2 h-1 w-12 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
          </div>
        </div>
        <div className="col-span-3 bg-zinc-900 p-4">
          <div className="rounded-xl bg-white p-3 text-zinc-900">
            <div className="h-3 w-20 rounded bg-zinc-900" />
            <div className="mt-2 h-2 w-28 rounded bg-zinc-300" />
            <div className="mt-1.5 h-2 w-24 rounded bg-zinc-300" />
            <div className="mt-3 h-5 w-20 rounded-full bg-brand-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
