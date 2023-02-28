import { useState } from "react";
import { LanguageContext } from "./Context";
import { Language, LanguageProviderProps } from "./Types";

export default function LanguageProvider ({ children } : LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>();

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      { children }
    </LanguageContext.Provider>
  )
}
