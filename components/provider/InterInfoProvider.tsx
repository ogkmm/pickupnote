import { createContext, useReducer } from 'react';
import { MusicSpotifyCodeInter } from '@/lib/type';

const reducer = (
  state: MusicSpotifyCodeInter,
  fields: Partial<MusicSpotifyCodeInter>
): MusicSpotifyCodeInter => ({ ...state, ...fields });

type ReturnType = {
  state: MusicSpotifyCodeInter;
  dispatch: (fields: Partial<MusicSpotifyCodeInter>) => void;
};

export const DataContext = createContext<ReturnType>({} as ReturnType);

interface InterInfoProviderProps {
  children: React.ReactNode;
  initValue: MusicSpotifyCodeInter;
}

export function InterInfoProvider({
  children,
  initValue
}: InterInfoProviderProps) {
  const [state, dispatch] = useReducer(
    reducer,
    initValue || ({} as MusicSpotifyCodeInter)
  );

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
