import { ReactNode } from 'react';

export type PageProviderProps = {  children: ReactNode };

export type Page = "portfolio" | "resume" | "about" | "contact" | undefined;