import React from 'react';

const cardEstadistica = ({ numero, texto }) => {
  return (
    <div className="cardEst">
        <h1 className='numEst'>{numero}</h1>
        <h3 className='textoEst'>{texto}</h3>
    </div>
  );
};export default cardEstadistica;