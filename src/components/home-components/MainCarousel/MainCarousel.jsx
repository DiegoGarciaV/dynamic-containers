import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MainCarousel.module.css";

const MainCarousel = ({ items, size }) => {

  const carouselSize = size === "sm" ? "small-carousel" : "large-carousel";
  return (
    <Carousel interval={null} pause="hover">
      {
        items.map((element, index) => {
          return (
            <Carousel.Item key={element.id} className={`${styles.carouselItem} ${styles[carouselSize]}`} style={{ backgroundImage: `url(${element.image})` }}>
              <Link to={element.contentUrl}  >
                <div className={styles.bluredCover}>
                  <img
                    className={styles.carouselImg}
                    src={element.image}
                    alt={element.description}
                  />
                  {(element.title !== "" || element.description !== "") && (<div className="academic-offer-desc blurred-cont blurred-level-2-3 blurred-cont-overlap to-focus">
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{element.title}</h5>
                      <p className="text-center">{element.description}</p>
                    </div>
                  </div>)}

                </div>
              </Link>
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
    image: PropTypes.string,
    contentUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })),
  size: PropTypes.string
};
export default MainCarousel;
