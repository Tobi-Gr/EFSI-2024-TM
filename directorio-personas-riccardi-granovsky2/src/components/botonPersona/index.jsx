import React from 'react';
import {Link } from "react-router-dom";

const botonPersona = ({ persona }) => {
  
  return (
    <div className="cardPersona">
        <Link className="cardNombre" to={"/persona/" + persona.id}>{persona.nombre + " " + persona.apellido}</Link>
    </div>
  );
};

export default botonPersona;