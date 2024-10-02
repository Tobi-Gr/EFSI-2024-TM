import React, { useEffect, useState } from 'react';
import Datos from './../Datos';

function MainScreen() { 
  const patos = Datos();
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      return newIndex > patos.length ? 1 : newIndex < 1 ? patos.length : newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    if (patos.length > 0) { //solo corre si ya cargó a los patos
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      // esconde las slides en las que no estás
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // Le saca la clase 'activa' a todos los puntos
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      // muestra la slide actual y activa el punto actual
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }, [slideIndex, patos]);

  return (
    <main className="main">
      <h1 className='titulo'>The ducking shop</h1>
      
      <div className="slideshow-container">
        {patos.map((pato, index) => (
          <div className="mySlides fade" key={index}>
            <img src={pato.foto1} alt={pato.nombre} style={{ width: "100%" }} />
            <div className="text">{pato.nombre}</div>
          </div>
        ))}
        
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      
      <div style={{ textAlign: 'center' }}>
      {patos ? (
        patos.map((_, index) => (
          <span
            className="dot"
            key={index}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))
      ) : (
        <p>Espera a que carge</p>
      )}
        
        
      </div>
    </main>
  );
}

export default MainScreen;
