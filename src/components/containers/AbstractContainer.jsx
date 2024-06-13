import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useContent } from '../contexts/DynamicContent';
import styles from './AbstractContainer.module.css'
import ParagraphContainer from './primitive-containers/ParagraphContainer/ParagraphContainer';
import TitleContainer from './primitive-containers/TitleContainer/TitleContainer';
import SubtitleContainer from './primitive-containers/SubTitleContainer/SubTitleContainer'
import SectionTitlecontainer from './primitive-containers/SectionTitleContainer/SectionTitleContainer'
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
      label: "Titulo de página"
    },
    {
      id: 1,
      label: "Titulo de sección"
    },
    {
      id: 2,
      label: "Inicio de parrafo"
    },
    {
      id: 3,
      label: "Párrafos"
    },
  ]

  const componentMap = {
    0: TitleContainer,
    1: SectionTitlecontainer,
    2: SubtitleContainer,
    3: ParagraphContainer,
  };

  const RenderedComponent = localContent
    ? componentMap[localContent.containerType] || ParagraphContainer
    : null;

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
        content: event.target.value,
        emphasis: localContent.emphasis
      }
    );
  };

  const handleTypeChange = (event) => {
    setLocalContent(
      {
        containerType: event.target.value,
        content: localContent.content,
        emphasis: localContent.emphasis
      }
    );
  };

  const handleEmphasisChange = (event) => {
    setLocalContent(
      {
        containerType: localContent.containerType,
        content: localContent.content,
        emphasis: event.target.value
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

  if (!loading && (localContent === null || localContent === undefined))
    return (
      <></>
    )
  return (
    <div onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleTap} className='w-100'>
      {isEditing ? (
        <div className={styles.editContainer}>
          <div className='left-aligned'>
            <select className={styles.contentType} onChange={handleTypeChange} defaultValue={localContent.containerType}>
              {
                typeOptions.map((element) => <option value={element.id} key={element.id}>{element.label}</option>)
              }
            </select>
            <select className={`${styles.emphasis} ${localContent.emphasis == "none" ? "" : localContent.emphasis === "orange" ? styles.emphasisOrange : localContent.emphasis === "black" ? styles.emphasisBlack : styles.emphasisGreen}`} onChange={handleEmphasisChange} defaultValue={localContent.emphasis}>
              <option className={styles.emphasisNone} value="none">Sin Enfasis</option>
              <option className={styles.emphasisOrange} value="orange"></option>
              <option className={styles.emphasisGreen} value="green"></option>
              <option className={styles.emphasisBlack} value="black"></option>
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

      ) : (
        localContent !== null ? (
          <RenderedComponent emphasis={localContent.emphasis}>
            {` ${localContent.content}`}
          </RenderedComponent>
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
