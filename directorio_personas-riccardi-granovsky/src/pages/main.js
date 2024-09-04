import * as React from 'react';
import Personas from './../data/Personas.json';

function MainScreen(navigation) {
  return (
      <main className="main">
        <div className="titleContainer">
          <h1>Directorio de personas</h1>
        </div>
        <div className="cardsContainer">
          {Personas.map(persona => (
              <CardPersona key={persona.id} persona={persona}/>            
          ))}
        </div>
      </main>
  );
}

export default MainScreen;