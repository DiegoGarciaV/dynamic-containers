import React from "react";
import PropTypes from 'prop-types';
import styles from './InPageCarousel.module.css'
import { Link } from "react-router-dom";
const CarouselItem = ({ carouselItem }) => {

    return (
        <div className={styles.carouselItem}>
            <Link to={carouselItem.url}>
                <div className={styles.carouselCard} style={{ backgroundImage: `url(${carouselItem.image})` }}>
                    <div className={styles.bluredCover}>
                        <img
                            className={styles.carouselImg}
                            src={carouselItem.image}
                            alt={carouselItem.description}
                        />
                    </div>
                </div>
            </Link>

        </div>

    )
}

CarouselItem.propTypes = {
    carouselItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string

    })

};

export default CarouselItem