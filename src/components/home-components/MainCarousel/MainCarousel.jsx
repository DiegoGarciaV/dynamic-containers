import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import styles from "./MainCarousel.module.css";

const MainCarousel = ({ items }) => {
  return (
    <Carousel interval={null} pause="hover">
        {
            items.map((element, index) => {
                return (
                    <Carousel.Item key={element.id} className={styles.carouselItem} style={{backgroundImage: `url(${element.image})`}}>
                      <div className={styles.bluredCover}>
                        <img
                          className={styles.carouselImg}
                          src={element.image}
                          alt={element.description}
                          />
                      </div>
                      
                    </Carousel.Item>
                        
                )
            })
        }
    </Carousel>
  );
};

MainCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,

  })),
};
export default MainCarousel;
