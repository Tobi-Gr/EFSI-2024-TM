import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Carrito</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        {/* flatlist con card de productos */}
        <h3><b>Total:</b> XXXX$</h3> 
        {/*está la función para calcular el total en el context */}
        <button><b>Cerrar</b></button>
      </div>
    </div>
  );
};

export default Modal;
