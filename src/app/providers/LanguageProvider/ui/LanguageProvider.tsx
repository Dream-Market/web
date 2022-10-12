import { ReactNode, useMemo, useState } from 'react';
import { AppLanguage, LanguageContext } from '../lib/LanguageContext';

const defaultLanguage =
  (localStorage.getItem('i18nextLng') as AppLanguage) || AppLanguage.EN;

interface LanguageProviderProps {
  initialLanguage?: AppLanguage;
  children?: ReactNode;
}

export const LanguageProvider = (props: LanguageProviderProps) => {
  const { initialLanguage, children } = props;

  const [language, setLanguage] = useState<AppLanguage>(
    initialLanguage || defaultLanguage
  );

  const defaultProps = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={defaultProps}>
      {children}
    </LanguageContext.Provider>
  );
};
