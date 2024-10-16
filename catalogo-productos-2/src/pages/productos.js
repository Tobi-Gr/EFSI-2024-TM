import Datos from './../Datos';
import React, { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Search from '../components/Search';
import { useProducts } from './../productsContext';

function ProductosScreen() {
  const { productsData = [] } = useProducts() || {};
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductosFiltrados(productsData);
  }, [productsData]);

  const handleSearch = (search) => {
    if (search) {
      const results = productsData.filter((producto) => 
        producto.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductosFiltrados(results);
    } else {
      setProductosFiltrados(productsData); // Restablece a todos los productos si no hay búsqueda
    }
  };

  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='busqueda'>
        <Search onSearch={handleSearch} />
      </div>
      <div className='productosContainer'>
        {productosFiltrados ? (
          productosFiltrados.map((producto, index) => (
            <CardProducto key={index} producto={producto} />        
          ))
        ) : (
          <p>No hay resultados para tu búsqueda</p>
        )}
      </div>
    </main>
  );
}

export default ProductosScreen;
