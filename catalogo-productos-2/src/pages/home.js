import React, { useEffect, useState, useContext } from 'react';
import Datos from './../Datos';
import { useProducts } from './../productsContext';
import CardProducto from '../components/CardProducto';

function MainScreen() { 
  const { products } = useProducts();
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      return newIndex > products.length ? 1 : newIndex < 1 ? products.length : newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    //hacer que agarre seis productos random para el carrousel    
      console.log(products);
    // if (productos.length > 0) { //solo corre si ya cargó a los patos
    //   const slides = document.getElementsByClassName("mySlides");
    //   const dots = document.getElementsByClassName("dot");

    //   // esconde las slides en las que no estás
    //   for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   // Le saca la clase 'activa' a todos los puntos
    //   for (let i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }

    //   // muestra la slide actual y activa el punto actual
    //   slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }
  }, [slideIndex, products]);

  return (
    <main className="main">
      {/* <h1 className='titulo'>The ducking shop</h1>
      
      <div className="slideshow-container">
        {productos.map((producto, index) => (
          <div className="mySlides fade" key={index}>
            <img src={producto.foto1} alt={producto.nombre} style={{ width: "100%" }} />
            <div className="text">{producto.nombre}</div>
          </div>
        ))}
        
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      
      <div style={{ textAlign: 'center' }}>
      {productos ? (
        productos.map((_, index) => (
          <span
            className="dot"
            key={index}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))
      ) : (
        <p>Espera a que cargen los productos</p>
      )}

      <div>
        {productos?
          (
            <div>
              {productos.map((producto, index) => (
                <CardProducto key={index} producto={producto} />        
              ))}
            </div>
          )
          : (<p>Espera a que cargen los productos</p>)}
      </div>
        
      </div> */}
    </main>
  );
}

export default MainScreen;
