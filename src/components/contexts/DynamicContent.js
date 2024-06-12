import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const URI_ROOT = "http://localhost:8090/api"
// Contextos
const ContentContext = createContext();

// Proveedores
export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState({
        "ASDQWE": 'This is editable content for first element',
        "HGFWEG": 'This is editable content for second element',
        "JKHERS": 'La Escuela Nacional de Ciencias de la Tierra (ENCiT) tiene como objetivo formar profesionales capacitados para abordar los procesos terrestres relacionados con la exploración y gestión de los recursos naturales, así como los impactos ambientales de los procesos atmosféricos, oceánicos y de los cuerpos acuáticos. También se busca desarrollar habilidades en la exploración del espacio.',
    });

    const saveChanges = async (id, newContent) => {
        try {
          const response = await fetch(`${URI_ROOT}/contents/test/${id}`, {
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
        } catch (error) {
          console.error('Error updating content:', error);
        }
      };

    return (
        <ContentContext.Provider value={{ content, saveChanges }}>
            {children}
        </ContentContext.Provider>
    );
};

ContentProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export const useContent = () => useContext(ContentContext);