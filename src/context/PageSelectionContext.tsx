import { createContext, ReactNode, Dispatch, SetStateAction, useState } from "react";

export type Page = "portfolio" | "resume" | "about" | "contact" | undefined;

export interface IPage {
  page: Page,
  setPage: Dispatch<SetStateAction<Page>>
}

const defaultState = {
  page: "portfolio",
  setPage: (page: Page) => {}
} as IPage;

export const PageContext = createContext<IPage>(defaultState);

type PageProviderProps = {
  children: ReactNode
}

export default function PageProvider ({ children } : PageProviderProps) {
  const [page, setPage] = useState<Page>();

  return (
    <PageContext.Provider value={{ page, setPage }}>
      { children }
    </PageContext.Provider>
  )
}
