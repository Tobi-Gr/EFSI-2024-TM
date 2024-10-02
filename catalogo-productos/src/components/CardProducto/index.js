import React, { useState } from 'react';

const CardProducto = ({ producto }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="cardProducto">
      <img 
        className="imgCard" 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        src={hovered ? producto.foto2 : producto.foto1} 
        alt={producto.nombre}
      />
      <div className='textoCard'>
        <h2>{producto.nombre}</h2>
        <h4>{producto.precio}</h4>
      </div>
    </div>
  );
};

export default CardProducto;