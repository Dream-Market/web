import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLanguage, LanguageContext } from './LanguageContext';

interface UseLanguageResult {
  language: AppLanguage;
  changeLanguage: (language: AppLanguage) => void;
}

export const useLanguage = (): UseLanguageResult => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = (language: AppLanguage) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return { language, changeLanguage };
};
