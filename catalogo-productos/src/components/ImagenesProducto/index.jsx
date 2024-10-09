import React, { useState } from 'react';

const FotosProducto = (producto) => {
    const [selectedImage, setSelectedImage] = useState(producto.foto1);
    const fotos = [
        producto.foto1,
        producto.foto2,
        producto.foto3
    ];


  return (
    <div className="detalleProducto">
      <div className="fotoGrande">
        <img src={selectedImage} alt="Imagen del producto" />
      </div>
      <div className="contenedorThumbnail">
        {fotos.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setSelectedImage(image)}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default FotosProducto;
