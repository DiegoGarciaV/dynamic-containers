import React from 'react';
import PropTypes from 'prop-types';

const ParagraphContainer = ({ children, emphasis = "none", className = "" }) => {

    const getEmphasis = () => {
        if(emphasis==="orange")
            return "enfac-text-1"
        if(emphasis==="green")
            return "enfac-text-2"
        if(emphasis==="black")
            return "enfac-text-bl"
        return ""
    }
    return (
        <>
            {
                children.split("\n").map((element, index) => <p className={`${getEmphasis()} ${className}`} key={"p_".concat(index)}>{element}</p>)
            }
        </>
    );
};

ParagraphContainer.propTypes = {
    children : PropTypes.string.isRequired,
    emphasis: PropTypes.string,
    className: PropTypes.string
};

export default ParagraphContainer;
