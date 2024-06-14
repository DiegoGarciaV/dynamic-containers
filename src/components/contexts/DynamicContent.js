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
        "intro_t": {
          content: 'Escuela Nacional de Ciencias de la Tierra',
          containerType: 0,
          emphasis: "none"
        },
        "intro_p1": {
          content: 'La Escuela Nacional de Ciencias de la Tierra (ENCiT) tiene como objetivo formar profesionales capacitados para abordar los procesos terrestres relacionados con la exploración y gestión de los recursos naturales, así como los impactos ambientales de los procesos atmosféricos, oceánicos y de los cuerpos acuáticos. También se busca desarrollar habilidades en la exploración del espacio.\nLa UNAM busca fortalecer su oferta educativa en áreas que permiten comprender el planeta de manera integral, determinar el alcance y la magnitud de los cambios generados por el ser humano y los elementos naturales, y prevenir, en la medida de lo posible, sus efectos. La ENCiT ofrece una educación de calidad con un enfoque científico e interdisciplinario en áreas como Ciencias Acuáticas, Ciencias de la Atmósfera, Ciencias Ambientales, Ciencias Espaciales, Ciencias de la Tierra Sólida y Geografía Aplicada.',
          containerType: 3,
          emphasis: "none"
        },
        "contact_t": {
          content: 'Información de contacto',
          containerType: 1,
          emphasis: "orange"
        },
        "contact_p": {
          content: 'Si deseas ponerte en comunicación con la Escuela Nacional de Ciencias de la Tierra, ponemos a tu disposición los siguientes medios de contacto, nuestro horario de atención es de las 8:30 a 15:00 y de 17:00 a 18:00 horas',
          containerType: 3,
          emphasis: "none"
        },
        "contact_list": {
          content: 'Circuito de la Investigación Científica S/N\nC.U. Coyoacán, 04510 CDMX\n5556224399, ext. 81951',
          containerType: 3,
          emphasis: "none"
        }
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