import React from 'react';
import styles from './Menu.module.css'
import Accordion from 'react-bootstrap/Accordion';
// const MenuItem = ({ label, to, children }) => {
//   return (
//     <li className={styles.menuItem}>
//       {to ? (
//         <a className={styles.menuLink} href={to}>{label}</a>
//       ) : (
//         <>
//           <span>{label}</span>
//           <ul>
//             {children}
//           </ul>
//         </>
//       )}
//     </li>
//   );
// };

const MenuItem = ({ label, to, children }) => {
  return (
      (
        <li className={styles.menuItem}>
          {
            to ? <a  href={to} className={styles.menuLink}>{label}</a> :
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

export default MenuItem;
