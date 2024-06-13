import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const URI_ROOT = "http://localhost:8090/api/contents"
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {

  const getContent = async () => {

    try {
      const response = await fetch(URI_ROOT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const contents = await response.json();
      return contents;
    }
    catch (error) {
      return {
        "ASDQWE": 'This is editable content for first element',
        "HGFWEG": 'This is editable content for second element',
        "JKHERS": {
          content: 'La Escuela Nacional de Ciencias de la Tierra (ENCiT) tiene como objetivo formar profesionales capacitados para abordar los procesos terrestres relacionados con la exploración y gestión de los recursos naturales, así como los impactos ambientales de los procesos atmosféricos, oceánicos y de los cuerpos acuáticos. También se busca desarrollar habilidades en la exploración del espacio.',
          containerType: 4,
        },
      }
    }


  }

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContent();
        if (data) {
          setContent(data);
        } else {
          setError('Failed to load content');
        }
      } catch (err) {
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveChanges = async (id, newContent) => {
    try {
      const response = await fetch(`${URI_ROOT}/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, content: newContent }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setContent((prevContent) => ({
        ...prevContent,
        [id]: newContent,
      }));
    }
    catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <ContentContext.Provider value={{ content, saveChanges, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired
};


export const useContent = () => useContext(ContentContext);