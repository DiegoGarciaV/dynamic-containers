import React from 'react';
import styles from "./Menu.module.css"
const SubMenu = ({ children }) => {
  return (
    <ul className={styles.menuList}>
      {children}
    </ul>
  );
};

export default SubMenu;
