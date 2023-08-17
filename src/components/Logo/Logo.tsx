import React from 'react';
import styles from './Logo.module.scss';
import dzenLogo from 'assets/dzen.svg';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles['logo']}>
      <img src={dzenLogo} className={styles['logo__img']} alt="dZENcode logo" />
      <span className={styles['logo__title']}>dZENtest</span>
    </Link>
  );
};
