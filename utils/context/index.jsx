import { createContext, useContext } from 'react';

const SiteContext = createContext();

export default function SiteWrapper({ data, children }) {
  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
}

export function useSiteContext(data) {
  const [language, setLanguage] = useContext(SiteContext);
  const toggleLanguage = () => setLanguage(language === 'ar' ? 'fr' : 'ar');

  switch (true) {
    case data === 'language':
      return [language, toggleLanguage];

    default:
      return "Please add a useSiteContext Mode ex:'language ";
  }
}

export function LanguageSelector(Arab, French) {
  const [language] = useContext(SiteContext);

  return language === 'ar' ? Arab : French;
}
