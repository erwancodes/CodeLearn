import { useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

// Footer global de l'app. Masqué sur la landing (qui a son propre footer).
export default function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/landing" || pathname === "/welcome") return null;

  return (
    <footer className="mt-12 border-t border-slate-200 py-6 dark:border-slate-800">
      <p className="flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        Développé avec
        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        par
        <a
          href="https://erwancodes.me"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          Erwan
        </a>
      </p>
    </footer>
  );
}
