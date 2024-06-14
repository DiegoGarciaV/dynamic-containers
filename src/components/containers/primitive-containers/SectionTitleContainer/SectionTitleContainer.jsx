import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitleContainer.module.css'

const SectionTitleContainer = ({ children, emphasis="none", className }) => {

    const getEmphasis = () => {
        if(emphasis==="orange")
            return "orangeUnderlined"
        if(emphasis==="green")
            return "greenUnderlined"
        return ""
    }

    return (
        <h2 className={`${styles.sectionTitle} ${className}`}>
            <span className={`${styles.underLined} ${styles[getEmphasis()]}`}>{children}</span>
        </h2>
    );
};

SectionTitleContainer.propTypes = {
    children : PropTypes.string.isRequired,
    emphasis: PropTypes.string,
    className: PropTypes.string
};

export default SectionTitleContainer;
