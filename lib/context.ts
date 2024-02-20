import { createContext } from 'react';
import { MusicInfo } from './type';

export const DataContext = createContext<MusicInfo>({} as MusicInfo);
