import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Personas from '../data/Personas.json';
import Titulo from '../components/titulo';

function PersonaScreen() {
  const [persona, setPersona] = useState(null);
  const { personaId } = useParams();

  useEffect(() => {
    console.log("personaId:", personaId);
    if (personaId) {
      const foundPersona = Personas.find(p => p.id === personaId);
      if (foundPersona) {
        setPersona(foundPersona);
      } else {
        console.log("Persona not found.");
      }
    }
  }, [personaId]); // Add personaId as a dependency

  return (
    <div className='main'>
      {persona?
      <div>
        <Titulo texto={persona.nombre + " " + persona.apellido} />
        <h3>Su email es {persona.email}.</h3>
        <h3>Tiene {persona.edad} años.</h3>
      </div>
      :<Titulo texto={"Cargando..."} />
      }
    </div>
  );
}

//email y edad

export default PersonaScreen;
