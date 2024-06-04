import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuContainer from '../../components/lateral-menu/MenuContainer'
import MenuItem from '../../components/lateral-menu/MenuItem'
import SubMenu from '../../components/lateral-menu/SubMenu'
import styles from '../Spa.module.css'

const AcademicServices = () => (
    <div className={styles.mainContainer}>
        <div className={styles.lateralMenu}>
        <MenuContainer>
            <MenuItem label="Servicios Escolares">
                <SubMenu>
                    <MenuItem label="Presentación" to="/alumnado/escolares" />
                    <MenuItem label="Proceso de Admisión" to="/alumnado/escolares/admision" />
                    <MenuItem label="Proceso de Inscripción" to="/alumnado/escolares/inscripcion" />
                    <MenuItem label="Proceso de Reinscripción" to="/alumnado/escolares/reinscripcion" />
                    <MenuItem label="Emisión de Constancias y Trámites Escolares" to="/alumnado/escolares/constancias" />
                    <MenuItem label="Suspensión Temporal de Estudios" to="/alumnado/escolares/suspension" />
                    <MenuItem label="Seguro IMSS" to="/alumnado/escolares/imss" />
                    <MenuItem label="Titulación" to="/alumnado/escolares/titulacion" />
                    <MenuItem label="Preguntas Frecuentes" to="/alumnado/escolares/preguntas" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Movilidad">
                <SubMenu>
                    <MenuItem label="Presentación" to="/alumnado/movilidad" />
                    <MenuItem label="Términos y Consideraciones Generales" to="/alumnado/movilidad/terminos" />
                </SubMenu>
            </MenuItem>
            <MenuItem label="Becas" to="/alumnado/becas" />
            <MenuItem label="Servicio Social" to="/alumnado/social" />
            <MenuItem label="Prácticas Profesionales" to="/alumnado/profesionales" />
            <MenuItem label="Tutorias" to="/alumnado/tutorias" />
            <MenuItem label="Orientación Psicológica y Desarrollo Humano" to="/alumnado/orientacion-psicologica" />
            <MenuItem label="Bolsa de Trabajo" to="/alumnado/bolsa-trabajo" />
        </MenuContainer>
        </div>
        <div className={styles.spaContent}>
            <div className={styles.spaInnerContent}>
                <Outlet />
            </div>
        </div>
    </div>
);

export default AcademicServices;