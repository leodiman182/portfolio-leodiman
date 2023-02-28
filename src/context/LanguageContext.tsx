import { createContext, ReactNode, Dispatch, SetStateAction, useState } from "react";

export type Language = "portuguese" | "english" | undefined;

export interface ILanguage {
  language: Language,
  setLanguage: Dispatch<SetStateAction<Language>>
}

const defaultState = {
  language: "portuguese",
  setLanguage: (language: Language) => {}
} as ILanguage;


export const LanguageContext = createContext<ILanguage>(defaultState);

type LanguageProviderProps = {
  children: ReactNode
}

export default function LanguageProvider ({ children } : LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>();

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      { children }
    </LanguageContext.Provider>
  )
}
