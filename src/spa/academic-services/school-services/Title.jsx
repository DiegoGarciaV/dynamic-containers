import React from 'react';
import styles from '../../../pages/Spa.module.css'

const Title = () => {
  const paragraphs = [];

  for (let i = 0; i < 30; i++) {
    paragraphs.push(<p key={i}>This is paragraph {i + 1}</p>);
  }
  return <div>
      <h1>Title Page</h1>
      {paragraphs}
    </div>
};

export default Title;