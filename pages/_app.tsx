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
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
      <Script id="script-custom-substack-widget">
        {`window.CustomSubstackWidget = {
            substackUrl: 'bfamchon.substack.com',
            placeholder: 'example@gmail.com',
            buttonText: 'Subscribe',
            theme: 'custom',
            colors: {
              primary: '#f9fafb',
              input: '#282c34',
              email: '#f9fafb',
              text: '#282c34',
            }
          }`}
      </Script>
      <Script src="https://substackapi.com/widget.js" async></Script>
    </>
  );
}

export default MyApp;
