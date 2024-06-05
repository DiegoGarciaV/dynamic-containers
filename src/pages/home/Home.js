import React from 'react';
import MainCarousel from '../../components/home-components/MainCarousel/MainCarousel';

const mock_carousel = [
  {
    image: require('../../assets/imgs/carousel/main/1a_carrera_encit.png'),
    contentUrl: 'contents/servicios/docentes',
    title: 'First Page',
    description: 'Nuevas Docentes'
  },
  {
    image: require('../../assets/imgs/carousel/main/carrera_tierra_movimiento.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Second Page',
    description: 'Estacionamientos'
  },
  {
    image: require('../../assets/imgs/carousel/main/convoca_cultural.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    image: require('../../assets/imgs/carousel/main/convoca_ecologia.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    image: require('../../assets/imgs/carousel/main/convoca_economica.png'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
  {
    image: require('../../assets/imgs/carousel/main/nombramiento_rectoria.jpg'),
    contentUrl: 'documentos/estacionamientos.pdf',
    title: 'Third Page',
    description: 'Estacionamientos'
  },
];

const Home = () => (
  <div>
    <MainCarousel items={mock_carousel}></MainCarousel>
  </div>
);

export default Home;
