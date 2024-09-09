import * as React from 'react';
import Personas from './../data/Personas.json';
import BotonPersona from '../components/botonPersona'
import Titulo from '../components/titulo'

function MainScreen(navigation) {
  return (
      <main className="main">
        <Titulo texto="Directorio de personas"/>
        <div className="cardsContainer">
          {Personas.map(persona => (
              <BotonPersona key={persona.id} persona={persona}/>            
          ))}
        </div>
      </main>
  );
}

export default MainScreen;