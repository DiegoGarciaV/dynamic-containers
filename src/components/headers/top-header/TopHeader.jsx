import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './TopHeader.module.css'
import { Link } from 'react-router-dom';

const Header = () => (
  <div className={`${styles.navContainer} top-nav`}>
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className={styles.navVar}>
          <Nav>
            <Nav.Link as={Link} to="/nosotros" className={styles.navVarItem}>Nosotros</Nav.Link>
            <NavDropdown
              id="nav-dropdown-nosotros"
              title="Secretaria General"
              menuVariant="dark"
              className={styles.navVarItem}
            >
              <NavDropdown.Item href="">Secretaría Técnica</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Servicios Escolares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Secretaría de Asuntos Estudiantiles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Comunicación Social</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Actividades Culturales</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/alumnado/escolares" className={styles.navVarItem}>Cuerpos Colegiados</Nav.Link>
            <Nav.Link as={Link} to="/alumnado/movilidad" className={styles.navVarItem}>Administración</Nav.Link>
            <Nav.Link as={Link} to="/" className={styles.navVarItem}>Igualdad de Género</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
