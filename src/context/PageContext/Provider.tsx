import { useState } from "react";
import { PageContext } from "./Context";
import { Page, PageProviderProps } from "./Types";

export default function PageProvider ({ children } : PageProviderProps) {
  const [page, setPage] = useState<Page>();

  return (
    <PageContext.Provider value={{ page, setPage }}>
      { children }
    </PageContext.Provider>
  )
}