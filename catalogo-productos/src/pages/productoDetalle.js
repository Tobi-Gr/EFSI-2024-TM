import Datos from '../Datos';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FotosProducto from '../components/ImagenesProducto';
import CardProducto from '../components/CardProducto'; //abajo van a haber algunos random

function ProductoDetalleScreen() {
  const [patos, setPatos] = useState([]);
  const [pato, setPato] = useState();
  const { id } = useParams();

  useEffect(() => {
    const datos = Datos(); 
    setPatos(datos);
  }, []);

  useEffect(() => {  
    const patoEncontrado = patos.find(p => p.id === id);
    setPato(patoEncontrado);
  }, [patos, id]);

  return (
    <main className="main">
      {!pato ? ( 
        <h1 className='titulo'>Cargando...</h1> 
      ) : (
        <div className='contenedor-detalleProducto'>
          <FotosProducto {...pato}/>
          <h1 className='titulo'>{pato.nombre}</h1>
        </div>
      )}
    </main>
  );
}

export default ProductoDetalleScreen;
