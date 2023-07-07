import { createContext, Dispatch, SetStateAction } from 'react';
import { Bug } from './Types';

export interface IBug {
  isBugFixed: Bug;
  setIsBugFixed: Dispatch<SetStateAction<Bug>>;
}

const defaultState = {
  isBugFixed: false,
  setIsBugFixed: (isBugFixed: Bug) => {},
} as IBug;

export const BugContext = createContext<IBug>(defaultState);
