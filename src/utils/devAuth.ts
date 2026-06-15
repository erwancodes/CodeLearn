// Verrou du panneau dev.
//
// ⚠️ Sécurité "côté client" uniquement : l'app est 100 % locale (localStorage),
// donc ce verrou empêche un utilisateur normal d'accéder au panneau et de
// tricher, mais ne résiste pas à quelqu'un qui inspecterait le code à fond.
// Le mot de passe n'est PAS stocké en clair : on ne garde que son hash SHA-256.

// Hash SHA-256 du mot de passe (hex, minuscules).
// Pour le changer : exécuter dans la console du navigateur
//   crypto.subtle.digest("SHA-256", new TextEncoder().encode("TON_MDP"))
//     .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,"0")).join("")))
// puis coller le résultat ci-dessous.
export const DEV_PASSWORD_HASH =
  "7f4c1428607c2de24492ae8141ab270b6252cb11990562e7602c71d31f090c7a";

const SESSION_KEY = "codelearn_dev_unlocked";

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function checkDevPassword(input: string): Promise<boolean> {
  const hash = await sha256Hex(input);
  const ok = hash === DEV_PASSWORD_HASH;
  if (ok) {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* noop */
    }
  }
  return ok;
}

// Déverrouillé pour la session en cours (jusqu'à fermeture de l'onglet) ?
export function isDevUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function lockDev(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* noop */
  }
}
