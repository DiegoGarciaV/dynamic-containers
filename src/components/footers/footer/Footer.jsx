import React from 'react';
import styles from './Footer.module.css'
import fbLogo from '../../../assets/imgs/social-media/Facebook.png'
import twLogo from '../../../assets/imgs/social-media/twitter.avif'
import igLogo from '../../../assets/imgs/social-media/Instagram.webp'
import ytLogo from '../../../assets/imgs/social-media/Youtube_logo.png'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.colorFilm}>
      <div className="container-fluid">
        <div className={`row ${styles.footerFlexColumn}`}>
          <div className="col col-12">
            <div className="row">
              <div className="col-12 col-lg-6">
                <p>Hecho en México, Universidad Nacional Autónoma de México (UNAM), todos los derechos reservados 2019.
                  Esta página puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica.
                  De otra forma, requiere permiso previo por escrito de la institución.</p>
              </div>
              <div className="col-12 col-lg-5">
                <p className="text-center">
                </p>
                <div className="address-data">
                  <div className="row">
                    <div className={`col-3 ${styles.vAl}`}><a href="https://www.facebook.com/UNAM.ENCIT" className={styles.iconSocial}><img className={styles.iconSocialImg} src={fbLogo} alt="Facebook" /></a></div>
                    <div className={`col-3 ${styles.vAl}`}><a href="https://www.instagram.com/encit_unam/" className={styles.iconSocial}><img className={styles.iconSocialImg} src={igLogo} alt="Instagram" /></a></div>
                    <div className={`col-3 ${styles.vAl}`}><a href="https://twitter.com/UNAM_MX" className={styles.iconSocial}><img className={styles.iconSocialImg} src={twLogo} alt="Twitter" /></a></div>
                    <div className={`col-3 ${styles.vAl}`}><a href="https://www.youtube.com/@encit-escuelanacionaldecie1297" className={styles.iconSocial}><img className={styles.iconSocialImg} src={ytLogo} alt="Youtube" /></a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr className="my-4" />
          <div className="col-12">
            <p>
              La Escuela Nacional de Ciencias de la Tierra de la UNAM, es responsable del tratamiento de sus datos personales para el registro de usted en calidad de alumno,
              docente, personal de la entidad académica, conferencista o invitado externo (nacional o extranjero), visitante, proveedor o cliente de servicios universitarios.
            </p>
            <p>
              Para cumplir las finalidades necesarias anteriormente descritas u otras aquellas exigidas legalmente o por las autoridades competentes podrá
              transferir sus datos personales. Podrá ejercer sus derechos ARCO en la Unidad de Transparencia de la UNAM, o a través de la Plataforma Nacional
              de Transparencia.
            </p>
          </div>
          <div className="col-12">
            <div className={styles.footerData}>
              <div className="container-fluid">
                <div className="row justify-content-arround">
                  <div className={`col-12 col-md-3 ${styles.iconLink}`}><a href="http://encit.unam.mx/sites/default/files/2022-08/aviso_privacidad.pdf" className={styles.iconLinkA}>Aviso de Privacidad Integral</a></div>
                  <div className={`col-12 col-md-3 ${styles.iconLink}`}><a href="http://www.transparencia.unam.mx/" className={styles.iconLinkA}>Portal de Transparencia Universitaria</a></div>
                  <div className={`col-12 col-md-3 ${styles.iconLink}`}><a href="https://www.plataformadetransparencia.org.mx/" className={styles.iconLinkA}>Plataforma Nacional de Transparencia</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
