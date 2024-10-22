import React from 'react';
import './BotonComponente.css'; 

const BotonComponente = ({ className, children }) => {
  return (
      <button className={className}>
          {children}
          
      </button>
  );
};
export default BotonComponente;
