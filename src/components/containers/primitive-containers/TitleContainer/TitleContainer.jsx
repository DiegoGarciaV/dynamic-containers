import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleContainer.module.css'

const TitleContainer = ({ children }) => {
    return (
        <h1 className={styles.title}>
            {children}
        </h1>
    );
};

TitleContainer.propTypes = {
    children : PropTypes.string.isRequired,
};

export default TitleContainer;
