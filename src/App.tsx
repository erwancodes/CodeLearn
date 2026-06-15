import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useProgress } from "./store/useProgress";
import Navbar from "./components/Navbar";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Module from "./pages/Module";
import Lesson from "./pages/Lesson";
import Exercise from "./pages/Exercise";
import Settings from "./pages/Settings";

// Garde : redirige vers l'onboarding tant qu'aucun prénom n'est saisi.
function RequireUser({ children }: { children: React.ReactNode }) {
  const username = useProgress((s) => s.settings.username);
  if (!username) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export default function App() {
  const theme = useProgress((s) => s.settings.theme);

  // Applique le thème sur <html> pour Tailwind (darkMode: "class").
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route
          path="/dashboard"
          element={
            <RequireUser>
              <Home />
            </RequireUser>
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            <RequireUser>
              <Module />
            </RequireUser>
          }
        />
        <Route
          path="/lesson/:moduleId/:lessonId"
          element={
            <RequireUser>
              <Lesson />
            </RequireUser>
          }
        />
        <Route
          path="/exercise/:moduleId/:lessonId"
          element={
            <RequireUser>
              <Exercise />
            </RequireUser>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireUser>
              <Settings />
            </RequireUser>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
