import React from 'react';
import MainCarousel from '../../components/home-components/MainCarousel/MainCarousel';
import InPageCarousel from '../../components/InPageCarousel/InPageCarousel';

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
    url: "eventos/"
  },
  {
    id:2,
    title: "Second Element",
    image: require("../../assets/imgs/carousel/notices/convoca_ecologia.png"),
    url: "eventos/"
  },
  {
    id: 3,
    title: "Third Element",
    image: require("../../assets/imgs/carousel/notices/nautilus_fotografia.jpg"),
    url: "eventos/"
  },
  {
    id:4,
    title: "Fourth Element",
    image: require("../../assets/imgs/carousel/notices/estacionamientos_0.png"),
    url: "eventos/"
  },
  {
    id: 5,
    title: "5 Element",
    image: require("../../assets/imgs/carousel/notices/raugm_23.png"),
    url: "eventos/"
  },
  {
    id:6,
    title: "6 Element",
    image: require("../../assets/imgs/carousel/notices/servicio_social.png"),
    url: "/alumnado/social"
  },
  {
    id:7,
    title: "6 Element",
    image: require("../../assets/imgs/carousel/notices/reinscripciones24-1.png"),
    url: "/alumnado/escolares/reinscripcion"
  }
]
const Home = () => (
  <div>
    <MainCarousel items={mock_carousel}></MainCarousel>
    <div className='cover-container'>
      <div className='container-fluid h-100'>
        <h2 className="container-title">Avisos</h2>
        <InPageCarousel carouselItems={events}></InPageCarousel>
      </div>
    </div>
      
  </div>
);

export default Home;
