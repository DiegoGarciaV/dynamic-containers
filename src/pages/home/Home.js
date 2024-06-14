import React from 'react';
import MainCarousel from '../../components/home-components/MainCarousel/MainCarousel';
import InPageCarousel from '../../components/InPageCarousel/InPageCarousel';
import AbstractContainer from '../../components/containers/AbstractContainer';

const mock_carousel = [
  {
    id: 1,
    image: require('../../assets/imgs/carousel/main/carrera_tierra_movimiento.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: '',
    description: ''
  },
  {
    id: 2,
    image: require('../../assets/imgs/carousel/main/convoca_cultural.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: '',
    description: ''
  },
  {
    id: 3,
    image: require('../../assets/imgs/carousel/main/convoca_ecologia.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: '',
    description: ''
  },
  {
    id: 4,
    image: require('../../assets/imgs/carousel/main/convoca_economica.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: '',
    description: ''
  },
  {
    id: 5,
    image: require('../../assets/imgs/carousel/main/nombramiento_rectoria.jpg'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: '',
    description: ''
  },
];
const events = [
  {
    id: 1,
    title: "",
    image: require("../../assets/imgs/carousel/notices/2_simulacro.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 2,
    title: "",
    image: require("../../assets/imgs/carousel/notices/convoca_ecologia.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 3,
    title: "",
    image: require("../../assets/imgs/carousel/notices/nautilus_fotografia.jpg"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 4,
    title: "",
    image: require("../../assets/imgs/carousel/notices/estacionamientos_0.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 5,
    title: "",
    image: require("../../assets/imgs/carousel/notices/raugm_23.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 6,
    title: "",
    image: require("../../assets/imgs/carousel/notices/servicio_social.png"),
    contentUrl: "/alumnado/social",
    description: ""
  },
  {
    id: 7,
    title: "",
    image: require("../../assets/imgs/carousel/notices/reinscripciones24-1.png"),
    contentUrl: "/alumnado/escolares/reinscripcion",
    description: ""
  }
]

const academicOffer = [
  {
    id: 0,
    title: "Ciencias de la Tierra",
    image: require("../../assets/imgs/carousel/academic-offer/ciencias-tierra.jpg"),
    contentUrl: "licenciaturas/ciencias-tierra",
    description: "Conoce todo sobre nuestros planes y perfiles de egreso."
  },
  {
    id: 1,
    title: "Geografía Aplicada",
    image: require("../../assets/imgs/carousel/academic-offer/geo-aplicada.jpg"),
    contentUrl: "licenciaturas/geografia-aplicada",
    description: "Conoce todo sobre nuestros planes y perfiles de egreso."
  }
]
const Home = () => (
  <div>
    <MainCarousel items={mock_carousel}></MainCarousel>
    <div className='cover-container'>
      <div className='container-fluid h-100'>
        <div className='row justify-content-between'>
          <div className='col col-12 col-lg-5'>
            <div className='d-flex flex-column justify-content-around align-items-center h-100'>
              <AbstractContainer containerId='intro_t' className="pb-3"></AbstractContainer>
              <MainCarousel items={academicOffer} size='sm'></MainCarousel>
            </div>
          </div>
          <div className='col col-12 col-lg-6'>
            <div className='d-flex flex-column justify-content-around align-items-center h-100'>
              <AbstractContainer containerId='intro_p1' className="my-5"></AbstractContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='cover-container'>
      <div className='container-fluid h-100'>
        <h2 className="container-title">Avisos</h2>
        <InPageCarousel carouselItems={events}></InPageCarousel>
      </div>
    </div>
    <div className='cover-container'>
      <div className='container-fluid h-100'>
        <div className="row h-100 justify-content-evenly" id="contact-section">
          <div className="col col-md-6 col-12">
            <div className="d-flex flex-column justify-content-around  h-100 pe-5">
              <AbstractContainer containerId='contact_t' className="pb-5"></AbstractContainer>
              <AbstractContainer containerId='contact_p' className="mb-0"></AbstractContainer>
              <div className="my-5">
                <AbstractContainer containerId='contact_list' className='bl-text'></AbstractContainer>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-12">
            <div className="d-flex flex-column justify-content-around align-items-center h-100">
              <div id="map" className="w-100" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
    );

    export default Home;
