import React from 'react';
import AbstractPage from '../AbstractPage/AbstractPage';

const About = () => {
  const menuTree = [
    {
      itemLabel: "Opcion 1",
      itemResource: "/"
    },
    {
      itemLabel: "Opcion 2",
      itemResource: "/"
    },
  ]
  return <AbstractPage menuTree={menuTree} />
};

export default About;
