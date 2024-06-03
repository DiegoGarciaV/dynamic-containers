import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import MenuContainer from '../../components/lateral-menu/MenuContainer'
import MenuItem from '../../components/lateral-menu/MenuItem'
import SubMenu from '../../components/lateral-menu/SubMenu'
import styles from './AcademicServices.module.css'

const AcademicServices = () => (
    <div className={styles.mainContainer}>
        <div className={styles.lateralMenu}>
        <MenuContainer>
            <MenuItem label="Servicios Escolares">
                <SubMenu>
                    <MenuItem label="Presentación" to="/alumnado/escolares" />
                    <MenuItem label="Proceso de Admisión" to="/alumnado/admision" />
                    <MenuItem label="Proceso de Inscripción" to="/alumnado/inscripcion" />
                    <MenuItem label="Proceso de Reinscripción" to="/alumnado/reinscripcion" />
                    <MenuItem label="Emisión de Constancias y Trámites Escolares" to="/alumnado/constancias" />
                    <MenuItem label="Suspensión Temporal de Estudios" to="/alumnado/suspension" />
                    <MenuItem label="Seguro IMSS" to="/alumnado/imss" />
                    <MenuItem label="Titulación" to="/alumnado/titulacion" />
                    <MenuItem label="Preguntas Frecuentes" to="/alumnado/preguntas" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Movilidad" to="/alumnado/movilidad" />
            <MenuItem label="Servicio Social" to="/alumnado/social" />
            <MenuItem label="Prácticas Profesionales" to="/alumnado/profesionales" />
        </MenuContainer>
        </div>
        <div className={styles.spaContent}>
            <Outlet />
        </div>
    </div>
);

export default AcademicServices;