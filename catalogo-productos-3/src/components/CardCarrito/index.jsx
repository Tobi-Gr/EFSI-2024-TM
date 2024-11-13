import React from 'react';

const CardCarrito = ({ producto, cantidad }) => {
   function BotonCantidad() {
       return (
            <main className="main">
            </main>
       );
  }

  return (
    <div className="card-carrito-container">
        <img alt='imagen del producto' src={producto.thumbnail}/>
        <h3>{producto.name}</h3>
        <h2>X</h2>
        {/* pastillita rara con la cantidad el + y el - */}
        <h4>${producto.price}</h4>
    </div>
  );
};

export default CardCarrito;
