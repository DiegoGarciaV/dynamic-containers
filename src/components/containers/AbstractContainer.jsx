import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useContent } from '../contexts/DynamicContent';
import styles from './AbstractContainer.module.css'
import ParagraphContainer from './primitive-containers/ParagraphContainer';
import RotaryLoader from '../ui-aux/RotaryLoader/RotaryLoader';

const AbstractContainer = ({ containerId, children }) => {
  const { content, saveChanges, loading } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(null);
  const [lastTap, setLastTap] = useState(0);
  const tapTimeout = useRef(null);

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

  const handleDoubleClick = () => {
    if (!loading)
      setIsEditing(true);
  };

  const handleDoubleTap = (event) => {
    if (loading)
      return
    const currentTime = Date.now();
    const tapInterval = currentTime - lastTap;

    if (tapInterval < 300 && tapInterval > 0) {

      clearTimeout(tapTimeout.current);
      setIsEditing(true);
    } else {
      tapTimeout.current = setTimeout(() => {
        clearTimeout(tapTimeout.current);
      }, 300);
    }

    setLastTap(currentTime);
  };

  const handleContentChange = (event) => {

    setLocalContent(
      {
        containerType: localContent.containerType,
        content: event.target.value
      }
    );
  };

  const handleTypeChange = (event) => {
    setLocalContent(
      {
        containerType: event.target.value,
        content: localContent.content
      }
    );
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    saveChanges(containerId, localContent);

  };


  useEffect(() => {
    if (content !== null)
      setLocalContent(content[containerId])
  }, [content])


  return (
    <div onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleTap}>
      {isEditing ? (
        <div className={styles.editContainer}>
          <div className='left-aligned'>
            <select className={styles.contentType} onChange={handleTypeChange}>
              {
                typeOptions.map((element) => <option value={element.id} key={element.id}>{element.label}</option>)
              }
            </select>
          </div>

          <textarea
            type="text"
            className={styles.contentInput}
            value={localContent.content}
            onChange={handleContentChange}
            autoFocus
          />
          <div className='right-aligned'>
            <button className={styles.saveButton}
              onClick={handleSaveChanges}>Guardar</button>
          </div>
        </div>

        //      ) : (children(localContent !== null ? ` ${localContent.content}` : `Loading...`))}
      ) : (
        localContent !== null ? (
          <ParagraphContainer >
            {` ${localContent.content}`}
          </ParagraphContainer>
        ) : (
          <RotaryLoader size="icon-sm"></RotaryLoader>
        )

      )
      }


    </div>
  );
};

AbstractContainer.propTypes = {
  containerId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default AbstractContainer;
