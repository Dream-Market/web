import { createContext } from 'react';

export enum AppLanguage {
  EN = 'en',
  RU = 'ru',
  RO = 'ro',
}

export interface LanguageContextProps {
  language?: AppLanguage;
  setLanguage?: (language: AppLanguage) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({});
