import { createContext, Dispatch, SetStateAction } from "react";
import { Language } from "./Types";

export interface ILanguage {
  language: Language,
  setLanguage: Dispatch<SetStateAction<Language>>
}

const defaultState = {
  language: "portuguese",
  setLanguage: (language: Language) => {}
} as ILanguage;


export const LanguageContext = createContext<ILanguage>(defaultState);