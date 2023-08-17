import React from 'react';
import styles from './TopMenu.module.scss';
import { Logo } from 'components/Logo';
import { SearchBar } from 'components/SearchBar';
import { DateBar } from 'components/DateBar/DateBar';

export const TopMenu: React.FC = () => {
  return (
    <header className={styles['top-menu']}>
      <Logo />
      <SearchBar />
      <DateBar />
    </header>
  );
};
