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
        src={producto.images[0]} 
        // src={hovered ? producto.images[1] : producto.images[0]} 
        alt={producto.nombre}
      />
      <div className='textoCard'>
        <h2>{producto.title}</h2>
        <h4>${producto.price}</h4>
      </div>
    </Link>
  );
};

export default CardProducto;