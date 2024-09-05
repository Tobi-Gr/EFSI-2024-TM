import React from 'react';

const botonPersona = ({ persona }) => {
  return (
    <div className="cardPersona">
            <h1 className="cardNombre">{persona.nombre + " " + persona.apellido}</h1>
    </div>
  );
};

export default botonPersona;