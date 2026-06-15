import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Code2, ArrowRight } from "lucide-react";
import { useProgress } from "../store/useProgress";

export default function Onboarding() {
  const navigate = useNavigate();
  const existingName = useProgress((s) => s.settings.username);
  const setUsername = useProgress((s) => s.setUsername);
  const [name, setName] = useState("");

  // Si un prénom existe déjà, on saute directement au dashboard.
  if (existingName) return <Navigate to="/dashboard" replace />;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = name.trim();
    if (!clean) return;
    setUsername(clean);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
            <Code2 className="h-8 w-8" />
          </span>
          <h1 className="text-3xl font-bold">Bienvenue sur CodeLearn</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Apprends les bases de la programmation à ton rythme, sans pression.
          </p>
        </div>

        <form onSubmit={submit} className="card p-6">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold"
          >
            Comment tu t'appelles ?
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ton prénom"
            autoFocus
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-800"
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="btn-primary mt-4 w-full"
          >
            C'est parti
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs text-slate-400">
            Aucun compte, aucun mot de passe. Ton prénom reste sur ton
            ordinateur.
          </p>
        </form>

        <p className="mt-5 text-center text-sm text-slate-400">
          Curieux d'en savoir plus ?{" "}
          <Link
            to="/landing"
            className="font-semibold text-brand-600 hover:underline dark:text-brand-400"
          >
            Découvrir CodeLearn
          </Link>
        </p>
      </div>
    </div>
  );
}
