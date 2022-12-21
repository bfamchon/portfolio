import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Baptiste Famchon | Portfolio',
  description:
    'Welcome on my portfolio where you will discover everything about my personal and professional life !',
  canonical: 'https://bfamchon.dev',
  openGraph: {
    type: 'website',
    locale: 'en_EN',
    url: 'https://bfamchon.dev',
    siteName: 'bfamchon',
    profile: {
      firstName: 'Baptiste',
      lastName: 'Famchon',
      username: 'bfamchon',
      gender: 'Male'
    },
    images: [
      {
        url: 'https://bfamchon.dev/og-image.jpg',
        width: 1200,
        height: 600,
        alt: 'Picture of Baptiste Famchon'
      }
    ]
  },
  twitter: {
    handle: '@BFamchon',
    site: '@BFamchon',
    cardType: 'summary_large_image'
  }
};

export default config;
