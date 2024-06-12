import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContent } from '../contexts/DynamicContent';
import styles from './AbstractContainer.module.css'

const AbstractContainer = ({ containerId, children }) => {
  const { content, saveChanges } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content[containerId]);


  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setLocalContent(
      {
        containerType: localContent.containerType,
        content: event.target.value
      }
    );
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    saveChanges(containerId, localContent);

  };

  const typeOptions = [
    {
      id: 0,
      label: "Titulo"
    },
    {
      id: 1,
      label: "Subtitulo"
    },
    {
      id: 2,
      label: "Enfasis (Naranja)"
    },
    {
      id: 3,
      label: "Enfasis (Verde)"
    },
    {
      id: 4,
      label: "Parrafos"
    },
  ]

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <div className={styles.editContainer}>
          <div className='left-aligned'>
            <select className={styles.contentType}>
              {
                typeOptions.map((element) => <option value={element.id} key={element.id}>{element.label}</option>)
              }
            </select>
          </div>
            
          <textarea
            type="text"
            className={styles.contentInput}
            value={localContent.content}
            onChange={handleChange}
            autoFocus
          />
          <div className='right-aligned'>
            <button className={styles.saveButton} 
              onClick={handleSaveChanges}>Guardar</button>
            </div>
        </div>

      ) : children(localContent.content)}
    </div>
  );
};

AbstractContainer.propTypes = {
  containerId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default AbstractContainer;
