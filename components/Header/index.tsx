/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Link from 'next/link';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../Layout';
import styles from './header.module.css';
import Moon from '../../public/assets/moon.svg';
import MoonFilled from '../../public/assets/moon_filled.svg';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const theme = useContext(ThemeContext);
  const {
    header, title, content, button, icon,
  } = styles;
  const moon = theme === 'light' ? (
    <Moon className={icon} />
  ) : (
    <MoonFilled className={icon} />
  );

  return (
    <header className={header}>
      <div className={content}>
        <Link href="/">
          <a>
            <h1 className={title}>Where in the world?</h1>
          </a>
        </Link>
        <button type="button" className={button} onClick={toggleTheme}>
          {moon}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
