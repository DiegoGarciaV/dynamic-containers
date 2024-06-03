import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './TopHeader.module.css'


const Header = () => (
  <div className={`${styles.navContainer} top-nav`}>
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className={styles.navVar}>
          <Nav>
            <Nav.Link href="nosotros" className={styles.navVarItem}>Nosotros</Nav.Link>
            <NavDropdown
              id="nav-dropdown-nosotros"
              title="Secretaria General"
              menuVariant="dark"
              className={styles.navVarItem}
            >
              <NavDropdown.Item href="">Secretaría Técnica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicios Escolares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Secretaría de Asuntos Estudiantiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comunicación Social</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Actividades Culturales</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/" className={styles.navVarItem}>Cuerpos Colegiados</Nav.Link>
            <Nav.Link href="/" className={styles.navVarItem}>Administración</Nav.Link>
            <Nav.Link href="/" className={styles.navVarItem}>Igualdad de Género</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
