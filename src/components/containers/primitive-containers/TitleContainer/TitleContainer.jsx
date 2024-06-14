import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleContainer.module.css'

const TitleContainer = ({ children, className = "" }) => {
    return (
        <h1 className={`${styles.title} ${className}`}>
            {children}
        </h1>
    );
};

TitleContainer.propTypes = {
    children : PropTypes.string.isRequired,
    className: PropTypes.string
};

export default TitleContainer;
