import { type Orama, type Schema } from '@orama/orama';
import { createContext, useState, type ReactNode } from 'react';

export type OramaContext = {
  isIndexed: boolean;
  db?: Orama;
  setData: (data: any[]) => void;
};

export const oramaCtx = createContext<OramaContext>({
  isIndexed: false,
  setData: () => undefined
});

export function OramaProvider({
  children,
  schema,
  language
}: {
  children: ReactNode;
  schema: Schema;
  language?: string;
}) {
  const [db, setDb] = useState<Orama>();
  const [isIndexed, setIsIndexed] = useState<boolean>(false);
  const [data, setData] = useState<any[]>();

  return <oramaCtx.Provider value={{ db, isIndexed, setData }}>{children}</oramaCtx.Provider>;
}
