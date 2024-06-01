import React from 'react';
import AbstractContainer from '../AbstractContainer';
import PropTypes from 'prop-types';

const EditableContainer = ({ containerId }) => {
  return <AbstractContainer containerId={containerId} />;
};

EditableContainer.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default EditableContainer;
