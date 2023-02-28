import { createContext, Dispatch, SetStateAction } from "react";
import { Page } from "./Types";

export interface IPage {
  page: Page,
  setPage: Dispatch<SetStateAction<Page>>
}

const defaultState = {
  page: "portfolio",
  setPage: (page: Page) => {}
} as IPage;

export const PageContext = createContext<IPage>(defaultState);
