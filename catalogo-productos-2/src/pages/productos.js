import Datos from './../Datos';
import React, { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Search from '../components/Search';

function ProductosScreen() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  useEffect(() => {
      const datos = Datos(); 
      setProductos(datos);
      setProductosFiltrados(datos);
  }, []); 

  const handleSearch = (search) => {
    if (search) {
      const results = productos.filter((dato) => 
        dato.nombre.toLowerCase().includes(search.toLowerCase())
      );
      setProductosFiltrados(results);
    } else {
      setProductosFiltrados(productos); // Restablece a todos los productos si no hay búsqueda
    }
  };
  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='busqueda'>
        <Search onSearch={handleSearch} />
      </div>
      <div className='productosContainer'>
        {productosFiltrados.map((producto, index) => (
          <CardProducto key={index} producto={producto} />        
        ))}
      </div>
    </main>
  );
}

export default ProductosScreen;
