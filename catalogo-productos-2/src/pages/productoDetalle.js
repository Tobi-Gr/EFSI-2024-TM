import Datos from '../Datos';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FotosProducto from '../components/ImagenesProducto';

function ProductoDetalleScreen() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState();
  const { id } = useParams();

  useEffect(() => {
    const datos = Datos(); 
    setProductos(datos);
  }, []);

  useEffect(() => {  
    const patoEncontrado = productos.find(p => p.id === id);
    setProducto(patoEncontrado);
  }, [productos, id]);

  return (
    <main className="main">
      {!producto ? ( 
        <h1 className='titulo'>Cargando...</h1> 
      ) : (
        <div className='contenedor-detalleProducto'>
          <FotosProducto {...producto}/>
          <div className='contenedor-textoProducto'>
            <h1 className='titulo'>{producto.nombre}</h1>
            <h3 className='descripción'>{producto.descripcion}</h3>
            <h3>{producto.precio}</h3>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductoDetalleScreen;
