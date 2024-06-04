import React from 'react';
import styles from './Menu.module.css'
import PropTypes from 'prop-types';

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

MenuContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuContainer;
