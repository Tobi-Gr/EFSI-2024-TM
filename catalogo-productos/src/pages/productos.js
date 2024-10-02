import React, { useEffect, useState } from 'react';
import Datos from './../Datos';
import CardProducto from '../components/CardProducto';

function ProductosScreen() {
  const [patos, setPatos] = useState([]); 

  useEffect(() => {
    const datos = Datos(); 
    setPatos(datos);
  }, []); 

  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='productosContainer'>
        {patos.map((pato, index) => (
          <CardProducto key={index} producto={pato} />
        ))}
      </div>
    </main>
  );
}

export default ProductosScreen;
