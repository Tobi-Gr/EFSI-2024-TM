// import Datos from './../Datos';
import React, { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Search from '../components/Search';
import { useProducts } from './../productsContext';

function ProductosScreen() {
  const { productsData = [] } = useProducts() || {};
  const [catgoriasSeleccionadas, setCategoriasSeleccionadas] = useState({
    beauty: false,
    fragances: false,
    furniture: false,
    groceries: false
  })
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

  const handleCheckbox = (e) => {
      console.log(e.target.value);
      setCategoriasSeleccionadas({
        ...catgoriasSeleccionadas,
        [e.target.value]: e.target.checked,
      });
      // if(e.target.checked){
      //     const resultadosCategoria = productsData.filter;
      // }
  }

  //https://youtu.be/94CVSF0Gr-w?t=981

  return (
    <main className="main">
      <h1 className='titulo'>Productos</h1>
      <div className='busqueda'>
        <Search onSearch={handleSearch} />
      </div>
      
      <div>
          <div className='input-checkbox'>
              <input
                onChange={handleCheckbox} 
                    type="checkbox"
                    name='categorias'
                    value='groceries'
                    id='groceries'
                    />
              <label htmlFor='groceries'>Alimentos</label>
          </div>
          <div className='input-checkbox'>
              <input
                onChange={handleCheckbox} 
                    type="checkbox"
                    name='categorias'
                    value='beauty'
                    id='beauty'
                    />
              <label htmlFor='Belleza'>Belleza</label>
          </div>
          <div className='input-checkbox'>
              <input
                onChange={handleCheckbox} 
                    type="checkbox"
                    name='categorias'
                    value='fragances'
                    id='fragances'
                    />
              <label htmlFor='fragances'>Fragancias</label>
          </div>
          <div className='input-checkbox'>
              <input
                onChange={handleCheckbox} 
                    type="checkbox"
                    name='categorias'
                    value='furniture'
                    id='furniture'
                    />
              <label htmlFor='furniture'>Muebles</label>
          </div>
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
