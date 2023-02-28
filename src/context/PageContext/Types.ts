import { ReactNode } from 'react';

export type PageProviderProps = {  children: ReactNode };

export type Page = "home" | "portfolio" | "resume" | "about" | "contact" | undefined;