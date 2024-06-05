import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import encit_logo from '../../../assets/imgs/logos/logo.png'
import unam_logo from '../../../assets/imgs/logos/logo_unam.png'
import styles from './BottomHeader.module.css'
import { Link } from 'react-router-dom';

const BottomHeader = () => (
  <div className={`${styles.navContainer} bottom-nav`}>
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className={`${styles.headerLogo} me-3`} src={unam_logo} alt="UNAM"/>
          <img className={`${styles.headerLogo} mx-3`} src={encit_logo} alt="ENCIT"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className={styles.navVar}>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Licenciaturas"
              menuVariant="dark"
              className={styles.navVarItem}
            >
              <NavDropdown.Item as={Link} to="/">Ciencias de la Tierra</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Geografía Aplicada</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/" className={styles.navVarItem}>Educación Continua</Nav.Link>
            <Nav.Link as={Link} to="/alumnado" className={styles.navVarItem}>Alumnado</Nav.Link>
            <Nav.Link as={Link} to="/academicos" className={styles.navVarItem}>Académicos de Carrera</Nav.Link>
            <Nav.Link as={Link} to="/servicios" className={styles.navVarItem}>Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default BottomHeader;
