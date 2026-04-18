"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import arDict from "@/data/dictionaries/ar.json";
import enDict from "@/data/dictionaries/en.json";

export type Lang = "ar" | "en";
type Dictionary = typeof arDict;

type LanguageContextType = {
  lang: Lang;
  dir: "rtl" | "ltr";
  dict: Dictionary;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
};

const dictionaries: Record<Lang, Dictionary> = { ar: arDict, en: enDict };

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("pizza-pan-lang") as Lang | null;
    if (stored && (stored === "ar" || stored === "en")) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("pizza-pan-lang", lang);
  }, [lang, mounted]);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const dict = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, dict, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
