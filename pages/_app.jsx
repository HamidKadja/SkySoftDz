import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '@/Comps/Layout/Footer';
import Header from '@/Comps/Layout/Header';
import '@/styles/globals.css';
import SiteWrapper from '@/utils/context';
import breakpoints from '@/utils/style/breakpoints';
import colors from '@/utils/style/colors';
import variables from '@/utils/style/variable';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { query } = router;
  const [language, setLanguage] = useState(false);

  useEffect(() => {
    if (router.isReady)
      setLanguage(
        query.lang === 'ar' ? 'ar' : query.lang === 'fr' ? 'fr' : 'ar'
      );
  }, [query.lang, router.isReady]);

  // If language is not set in the useEffect we dont render the site
  if (!language) return '';

  return (
    <SiteWrapper data={[language, setLanguage]}>
      <ThemeProvider theme={{ colors, breakpoints, variables }}>
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </SiteWrapper>
  );
}
