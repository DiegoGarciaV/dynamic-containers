import React from 'react';
import AbstractPage from '../AbstractPage/AbstractPage';

const Services = () => {

  const menuTree = [
    {
      id: 0,
      itemLabel: "Recursos Digitales",
      itemResource: "/servicios/digitales"
    },
    {
      id: 1,
      itemLabel: "Cómputo",
      itemResource: "/servicios/computo"
    },
    {
      id: 2,
      itemLabel: "Secretaria Administrativa",
      itemContent: [
        {
          id: 3,
          itemLabel: "Formatos administrativos",
          itemResource: "/servicios/secretaria/formatos"
        },
        {
          id: 4,
          itemLabel: "Circulares",
          itemResource: "/servicios/secretaria/circulares"
        }
      ]
    },
    {
      id: 5,
      itemLabel: "SIIAENCiT",
      itemResource: "/"
    },
  ]
  return <AbstractPage menuTree={menuTree} />
};

export default Services;