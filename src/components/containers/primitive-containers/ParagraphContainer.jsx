import React from 'react';
import PropTypes from 'prop-types';

const ParagraphContainer = ({ children  }) => {
    return (
        <>
            {
                children.split("\n").map((element, index) => <p key={"p_".concat(index)}>{element}</p>)
            }
        </>
    );
};

ParagraphContainer.propTypes = {
    children : PropTypes.string.isRequired,
};

export default ParagraphContainer;
