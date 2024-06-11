import React from 'react';
import AbstractPage from '../AbstractPage/AbstractPage';

const About = () => {
  const menuTree = [
    {
      id: 0,
      itemLabel: "Antecedentes",
      itemResource: "/nosotros/"
    },
    {
      id: 2,
      itemLabel: "Misión, visión y objetivo",
      itemResource: "/nosotros/valores"
    },
    {
      id: 3,
      itemLabel: "Organigrama",
      itemResource: "/nosotros/organigrama"
    },
    {
      id: 4,
      itemLabel: "Directorio",
      itemResource: "/nosotros/directorio"
    },
    {
      id: 5,
      itemLabel: "Gestión 2022-2026",
      itemResource: "/nosotros/gestion"
    },
  ]
  return <AbstractPage menuTree={menuTree} />
};

export default About;
