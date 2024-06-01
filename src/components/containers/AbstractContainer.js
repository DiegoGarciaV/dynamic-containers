import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContent } from '../contexts/Contexts';

const AbstractContainer = ({ containerId }) => {
  const { content, saveChanges } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content[containerId]);


  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setLocalContent(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    saveChanges(containerId, localContent);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      saveChanges(containerId, localContent);
    }
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={localContent}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{localContent}</span>
      )}
    </div>
  );
};

AbstractContainer.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default AbstractContainer;
