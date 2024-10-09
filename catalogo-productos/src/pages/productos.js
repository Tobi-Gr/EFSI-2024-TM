import React, { useEffect, useState } from 'react';
import Datos from './../Datos';
import CardProducto from '../components/CardProducto';
import Search from '../components/Search';

function ProductosScreen() {
  const [patos, setPatos] = useState([]);
  const [patosFiltrados, setPatosFiltrados] = useState([]);
  
  useEffect(() => {
      const datos = Datos(); 
      setPatos(datos);
      setPatosFiltrados(datos);
  }, []); 

  const handleSearch = (search) => {
    if (search) {
      const results = patos.filter((dato) => 
        dato.nombre.toLowerCase().includes(search.toLowerCase())
      );
      setPatosFiltrados(results);
    } else {
      setPatosFiltrados(patos); // Restablece a todos los productos si no hay búsqueda
    }
  };
  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='busqueda'>
        <Search onSearch={handleSearch} />
      </div>
      <div className='productosContainer'>
        {patosFiltrados.map((pato, index) => (
          <CardProducto key={index} producto={pato} />
        ))}
      </div>
    </main>
  );
}

export default ProductosScreen;
