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
        <title>Baptiste Famchon</title>
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
