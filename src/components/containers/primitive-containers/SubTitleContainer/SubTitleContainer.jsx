import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubTitleContainer.module.css'

const SubTitleContainer = ({ children, emphasis = "orange" }) => {

    const getEmphasis = () => {
        if(emphasis=="orange")
            return "enfac-text-1"
        if(emphasis=="green")
            return "enfac-text-2"
        if(emphasis=="black")
            return "enfac-text-bl"
        return ""
    }

    return (
        <h3 className={styles.sectionTitle}>
            <span className={getEmphasis()}>{children}</span>
        </h3>
    );
};

SubTitleContainer.propTypes = {
    children : PropTypes.string.isRequired,
    emphasis: PropTypes.string
};

export default SubTitleContainer;
