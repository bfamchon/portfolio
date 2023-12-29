import { useContext, useEffect } from 'react';
import { oramaCtx } from '../contexts/orama-context';

export function useSearchableData(data: any[]): void {
  const { setData } = useContext(oramaCtx);
  useEffect(() => {
    setData(data);
  }, [data, setData]);
}
