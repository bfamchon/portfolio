import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="XEVz73-K_208Gbl9J8HEZti9-q4c_vlRhZ_b8IpewZM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="min-h-screen mx-auto max-w-7xl flex flex-col">
        <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
