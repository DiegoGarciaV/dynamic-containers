import React from 'react';
import styles from './Menu.module.css'

const MenuContainer = ({ children }) => {
  return (
    <div className={styles.menuContainer}>
      <nav>
        <ul className={styles.menuList}>
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default MenuContainer;
