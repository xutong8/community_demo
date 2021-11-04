import React from 'react';
import './index.css';

const Icon = (props) => {
  const { img } = props;
  return (
    <div className="icon">
      <img alt="icon" src={img} />
      <div className="num">158</div>
    </div>
  )
};

export default Icon;