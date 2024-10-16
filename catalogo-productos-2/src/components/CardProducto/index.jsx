import React, { useState } from 'react';
import { Link } from "react-router-dom";


const CardProducto = ({ producto }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={'detalle/' + producto.id} className="cardProducto">
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
    </Link>
  );
};

export default CardProducto;