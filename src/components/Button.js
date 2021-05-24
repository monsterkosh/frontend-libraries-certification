import React from 'react';
import '../styles/Styles.css';

const Button = ({ title, activeClass, __callback }) => {
  return (
    <button className={activeClass} onClick={__callback}>
      {title}
    </button>
  );
};

export default Button;
