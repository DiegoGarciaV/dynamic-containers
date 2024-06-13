import React from 'react';
import MainCarousel from '../../components/home-components/MainCarousel/MainCarousel';
import InPageCarousel from '../../components/InPageCarousel/InPageCarousel';
import AbstractContainer from '../../components/containers/AbstractContainer';

const mock_carousel = [
  {
    id: 0,
    image: require('../../assets/imgs/carousel/main/1a_carrera_encit.png'),
    contentUrl: 'contents/servicios/docentes',
    title: 'First Page',
    description: 'Nuevas Docentes'
  },
  {
    id: 1,
    image: require('../../assets/imgs/carousel/main/carrera_tierra_movimiento.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Second Page',
    description: 'Estacionamientos'
  },
  {
    id: 2,
    image: require('../../assets/imgs/carousel/main/convoca_cultural.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    id: 3,
    image: require('../../assets/imgs/carousel/main/convoca_ecologia.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    id: 4,
    image: require('../../assets/imgs/carousel/main/convoca_economica.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    id: 5,
    image: require('../../assets/imgs/carousel/main/nombramiento_rectoria.jpg'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
];
const events = [
  {
    id: 1,
    title: "First Element",
    image: require("../../assets/imgs/carousel/notices/2_simulacro.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id:2,
    title: "Second Element",
    image: require("../../assets/imgs/carousel/notices/convoca_ecologia.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 3,
    title: "Third Element",
    image: require("../../assets/imgs/carousel/notices/nautilus_fotografia.jpg"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id:4,
    title: "Fourth Element",
    image: require("../../assets/imgs/carousel/notices/estacionamientos_0.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id: 5,
    title: "5 Element",
    image: require("../../assets/imgs/carousel/notices/raugm_23.png"),
    contentUrl: "eventos/",
    description: ""
  },
  {
    id:6,
    title: "6 Element",
    image: require("../../assets/imgs/carousel/notices/servicio_social.png"),
    contentUrl: "/alumnado/social",
    description: ""
  },
  {
    id:7,
    title: "6 Element",
    image: require("../../assets/imgs/carousel/notices/reinscripciones24-1.png"),
    contentUrl: "/alumnado/escolares/reinscripcion",
    description: ""
  }
]
const Home = () => (
  <div>
    <MainCarousel items={mock_carousel}></MainCarousel>
    <div className='cover-container'>
      <div className='container-fluid h-100'>
        <div className='row'>
          <div className='col col-12 col-lg-6'>
            <div className='d-flex flex-column justify-content-around align-items-center'>
            <AbstractContainer containerId='intro_t'></AbstractContainer>
            </div>
          </div>
          <div className='col col-12 col-lg-6'>
            <div className='d-flex flex-column justify-content-around align-items-center'>
              <AbstractContainer containerId='intro_p1'></AbstractContainer>
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
      
  </div>
);

export default Home;
