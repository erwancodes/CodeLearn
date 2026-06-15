import { Link } from "react-router-dom";
import { Compass, Home } from "lucide-react";
import { useProgress } from "../store/useProgress";

export default function NotFound() {
  const username = useProgress((s) => s.settings.username);
  const home = username ? "/dashboard" : "/";

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
          <Compass className="h-10 w-10" />
        </span>
        <p className="text-6xl font-black text-brand-600 dark:text-brand-400">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold">Page introuvable</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Oups ! Cette page n'existe pas (ou plus). Tu as peut-être suivi un lien
          cassé ou tapé une mauvaise adresse.
        </p>
        <Link to={home} className="btn-primary mt-6 inline-flex">
          <Home className="h-4 w-4" />
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
