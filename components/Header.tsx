import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          title="Lumos !"
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          title="Nox !"
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="w-full shadow-sm">
      <nav className="container px-4 sm:px-6 py-4 flex justify-between items-center mx-auto">
        <Logo />
        {renderThemeChanger()}
      </nav>
    </header>
  );
};

export default Header;
