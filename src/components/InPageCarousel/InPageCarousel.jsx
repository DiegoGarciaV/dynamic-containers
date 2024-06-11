import React, { useRef } from "react";
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem'
import styles from './InPageCarousel.module.css'

const InPageCarousel = ({ carouselItems }) => {

    const carouselInnerRef = useRef(null);

    const handlePrevClick = () => {
        if (carouselInnerRef.current) {
            const itemWidth = carouselInnerRef.current.querySelector(`.${styles.carouselItem}`).clientWidth;
            const visibleItems = Math.round(carouselInnerRef.current.clientWidth / itemWidth);
            const scrollAmount = carouselInnerRef.current.clientWidth / visibleItems;
            const isAtStart = carouselInnerRef.current.scrollLeft < scrollAmount*0.2;
            if (isAtStart) {
                carouselInnerRef.current.scrollTo({ left: carouselInnerRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                carouselInnerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleNextClick = () => {
        if (carouselInnerRef.current) {
            const itemWidth = carouselInnerRef.current.querySelector(`.${styles.carouselItem}`).clientWidth;
            const visibleItems = Math.round(carouselInnerRef.current.clientWidth / itemWidth);
            const scrollAmount = carouselInnerRef.current.clientWidth / visibleItems;
            const maxScrollLeft = carouselInnerRef.current.scrollWidth - carouselInnerRef.current.clientWidth;
            const isAtEnd = Math.ceil(carouselInnerRef.current.scrollLeft) >= maxScrollLeft*0.98;

            if (isAtEnd) {
                carouselInnerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselInnerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={`${styles.inPageCarousel} my-5 pt-3`}>
            <div className={styles.carouselInner} ref={carouselInnerRef}>
                {
                    carouselItems.map((element, index) => <CarouselItem carouselItem={element} key={element.id}></CarouselItem>)
                }
            </div>
            <button className={`${styles.button} carousel-control-prev`} onClick={handlePrevClick}>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className={`${styles.button} carousel-control-next`} onClick={handleNextClick}>
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>)

}


InPageCarousel.propTypes = {
    carouselItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,

    }))
};

export default InPageCarousel

