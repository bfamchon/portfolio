import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import SEO from '../next-seo.config';
import '../styles/globals.css';

config.autoAddCss = false;

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
