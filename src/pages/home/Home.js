import React, { useState, useEffect } from 'react';
import MainCarousel from '@encit/web-ui-components/MainCarousel';
import InPageCarousel from '@encit/web-ui-components/InPageCarousel';
import AbstractContainer from '../../components/containers/AbstractContainer';
import { useContent } from '../../components/contexts/DynamicContent';
import RotaryLoader from '@encit/web-ui-components/RotaryLoader';

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
const Home = () => {
  const { carousels } = useContent();
  const [localCarousels, setLocalCarousels] = useState(null);
  useEffect(() => {
    if (carousels !== null)
      setLocalCarousels(carousels)
  }, [carousels])

  return (
    <div>
      {localCarousels !== null ? (<MainCarousel items={localCarousels[0].carouselItems} ></MainCarousel>) : <RotaryLoader size="icon-lg"></RotaryLoader>}
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
          {localCarousels !== null ? (<InPageCarousel carouselItems={localCarousels[1].carouselItems} size='sm'></InPageCarousel>) : <RotaryLoader size="icon-md"></RotaryLoader>}
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

  )
};

export default Home;
