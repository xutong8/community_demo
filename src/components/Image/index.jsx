import React from 'react';
import './index.css';

const Image = (props) => {
  const { src, desc, style = {} } = props;

  return (
    <div className="image" style={{...style}}>
      <img src={src} alt="img" />
      <div className="desc">{desc}</div>
    </div>
  );
};

export default Image;