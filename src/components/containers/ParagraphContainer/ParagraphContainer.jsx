import React from 'react';
import AbstractContainer from '../AbstractContainer';
import PropTypes from 'prop-types';

const ParagraphContainer = ({ containerId }) => {
  return (
    <AbstractContainer containerId={containerId}>
      {(localContent) => <>
        {
          localContent.split("\n").map((element, index) => <p key={containerId.concat(index)}>{element}</p>)
        }
      </>}
    </AbstractContainer>
  );
};

ParagraphContainer.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default ParagraphContainer;
