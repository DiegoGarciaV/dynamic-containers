import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitleContainer.module.css'

const SectionTitleContainer = ({ children }) => {
    return (
        <h2 className={styles.sectionTitle}>
            <span className={styles.underLined}>{children}</span>
        </h2>
    );
};

SectionTitleContainer.propTypes = {
    children : PropTypes.string.isRequired,
};

export default SectionTitleContainer;
