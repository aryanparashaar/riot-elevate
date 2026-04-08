import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   usePageLoader
   ─────────────────────────────────────────────────────────────────────────
   Since all data is static (local arrays), there's no real async fetch to
   await. Instead, this hook simulates a brief loading window on the FIRST
   mount of each page, giving skeletons time to render before real content
   fades in. Subsequent navigations to the same page skip the loader.

   Usage:
     const { loading } = usePageLoader();
     if (loading) return <MySkeleton />;
     return <MyRealPage />;

   Options:
     duration  — how long (ms) the skeleton shows. Default: 700
     key       — unique string per page so each page gets its own state.
                 If omitted, every page shares one loader (resets on nav).
   ───────────────────────────────────────────────────────────────────────── */

const seen = new Set<string>();

export function usePageLoader(key = "default", duration = 700) {
  const alreadySeen = seen.has(key);
  const [loading, setLoading] = useState(!alreadySeen);

  useEffect(() => {
    if (alreadySeen) return;
    const t = setTimeout(() => {
      setLoading(false);
      seen.add(key);
    }, duration);
    return () => clearTimeout(t);
  }, [key, duration, alreadySeen]);

  return { loading };
}