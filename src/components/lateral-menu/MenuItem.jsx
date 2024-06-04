import React from 'react';
import styles from './Menu.module.css'
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, to, children }) => {
  return (
      (
        <li className={styles.menuItem}>
          {
            to ? <Link className={styles.menuLink} to={to}>{label}</Link>:
            <Accordion flush className={styles.subMenu}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.menuLink}>{label}</Accordion.Header>
                <Accordion.Body>
                  {children}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          }
        </li>
      )
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default MenuItem;
