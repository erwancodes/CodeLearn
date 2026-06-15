import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Trash2, User, Check } from "lucide-react";
import { useProgress } from "../store/useProgress";

export default function Settings() {
  const navigate = useNavigate();
  const username = useProgress((s) => s.settings.username);
  const theme = useProgress((s) => s.settings.theme);
  const setUsername = useProgress((s) => s.setUsername);
  const setTheme = useProgress((s) => s.setTheme);
  const resetAll = useProgress((s) => s.resetAll);

  const [name, setName] = useState(username);
  const [saved, setSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const saveName = () => {
    if (!name.trim()) return;
    setUsername(name.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const doReset = () => {
    resetAll();
    setConfirmReset(false);
    navigate("/dashboard");
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-8">
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <h1 className="mb-6 text-3xl font-bold">Réglages</h1>

      {/* Prénom */}
      <section className="card mb-5 p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold">
          <User className="h-5 w-5 text-brand-500" />
          Prénom
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-800"
          />
          <button onClick={saveName} className="btn-primary">
            {saved ? <Check className="h-4 w-4" /> : "Enregistrer"}
          </button>
        </div>
      </section>

      {/* Thème */}
      <section className="card mb-5 p-5">
        <h2 className="mb-3 font-bold">Thème</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 font-semibold transition ${
              theme === "light"
                ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10"
                : "border-slate-200 text-slate-500 dark:border-slate-700"
            }`}
          >
            <Sun className="h-4 w-4" />
            Clair
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 font-semibold transition ${
              theme === "dark"
                ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                : "border-slate-200 text-slate-500 dark:border-slate-700"
            }`}
          >
            <Moon className="h-4 w-4" />
            Sombre
          </button>
        </div>
      </section>

      {/* Réinitialisation */}
      <section className="card border-red-200 p-5 dark:border-red-500/20">
        <h2 className="mb-2 flex items-center gap-2 font-bold text-red-600">
          <Trash2 className="h-5 w-5" />
          Réinitialiser ma progression
        </h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          Efface toute ta progression, ton XP et ton streak. Ton prénom est
          conservé. Cette action est irréversible.
        </p>
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="btn bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400"
          >
            Réinitialiser
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={doReset}
              className="btn bg-red-600 text-white hover:bg-red-700"
            >
              Oui, tout effacer
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="btn-ghost"
            >
              Annuler
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
