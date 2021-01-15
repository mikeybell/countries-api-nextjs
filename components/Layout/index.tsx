import React, { useState, createContext } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-cycle
import Header from '../Header';
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const siteTitle = 'Countries API UI';
export const ThemeContext = createContext('');

const Layout = ({ children }: LayoutProps) => {
  const { app, container } = styles;
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => (
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  );

  return (
    <div className={`${app} ${theme}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <main className={container}>
          {children}
        </main>
      </ThemeContext.Provider>
    </div>
  );
};

export default Layout;
