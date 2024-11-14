import React from 'react';
import { useProducts } from './../../productsContext';

const CardCarrito = ({ producto }) => {
  const { actualizarCantEnCarrito, sacarDeCarrito } = useProducts();
  
  function handleMenos() {
    if (producto.quantity > 1) {
      actualizarCantEnCarrito(producto.id, producto.quantity - 1);
    } else {
      sacarDeCarrito(producto.id);
    }
  }
  
  function BotonCantidad() {
       return (
            <main className="pastilla-container">
              <button className="pastilla-menos" onClick={handleMenos}>-</button>
              <h3 className="pastilla-cantidad" key={'cardCarrito-'+producto.id}>{producto.quantity}</h3>
              <button className="pastilla-mas" onClick={() => actualizarCantEnCarrito(producto.id, producto.quantity+1)}>+</button>
            </main>
       );
  }

  return (
    <div className="card-carrito-container">
        <img alt='imagen del producto' src={producto.thumbnail}/>
        <h3>{producto.name}</h3>
        <BotonCantidad/>
        <h4>${producto.price}</h4>
    </div>
  );
};

export default CardCarrito;
