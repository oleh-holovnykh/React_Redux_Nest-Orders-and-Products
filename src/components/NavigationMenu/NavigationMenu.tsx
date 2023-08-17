import React from 'react';
import { BsBoxes } from 'react-icons/bs';
import { SiInstacart } from 'react-icons/si';
import styles from './NavigationMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const NavigationMenu: React.FC = () => {
  return (
    <nav className={styles['side-bar']}>
      <ul className={styles['navigation-list']}>
        <li className={styles['navigation-list__item']}>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            <BsBoxes />
            <span className={styles['navigation-list__text']}>Orders</span>
          </NavLink>
        </li>

        <li className={styles['navigation-list__item']}>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            <SiInstacart />
            <span className={styles['navigation-list__text']}>Products</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
