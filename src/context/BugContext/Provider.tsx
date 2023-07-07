import { useState } from 'react';
import { BugContext } from './Context';
import { Bug, BugProviderProps } from './Types';

export default function BugProvider({ children }: BugProviderProps) {
  const [isBugFixed, setIsBugFixed] = useState<Bug>();

  return (
    <BugContext.Provider value={{ isBugFixed, setIsBugFixed }}>
      {children}
    </BugContext.Provider>
  );
}
