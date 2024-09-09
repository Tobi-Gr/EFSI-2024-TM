import { useEffect, useState }  from 'react';
import Titulo from '../components/titulo';
import Personas from './../data/Personas.json';
import CardEstadistica from '../components/cardEstadistica';

function EstadisticasScreen(navigation) {


  const [mayorEdad, setMayorEdad] = useState(0);
  const [menorEdad, setMenorEdad] = useState(999);
  const [personasMayores, setPersonasMayores] = useState([]);
  const [personasMenores, setPersonasMenores] = useState([]);

  useEffect(() => {
    personasMayorEdad();
    PersonasMenorEdad();
  });

  function contarMayoresA(edad)
  {
    let contador = 0;
    for (let i = 0; i < Personas.length; i++) {
      if(Personas[i].edad > edad)
      {
        contador++;
      }  
    }
    return contador;
  }

  function personasMayorEdad() {
    let maxEdad = 0;
    Personas.forEach(persona => {
      if (persona.edad > maxEdad) {
        maxEdad = persona.edad;
      }
    });
    setMayorEdad(maxEdad);
    
    const mayores = Personas.filter(persona => persona.edad === maxEdad)
                           .map(persona => persona.nombre + " " + persona.apellido);

    setPersonasMayores(mayores);
  }

  function PersonasMenorEdad(){
    let minEdad = 999;    
    Personas.forEach(persona => {
      if(persona.edad < minEdad){
        minEdad = persona.edad;
      }
    })
    setMenorEdad(minEdad);
    const menores = Personas.filter(persona => persona.edad === minEdad)
                            .map(persona => persona.nombre + " " + persona.apellido)
    setPersonasMenores(menores);
  }

  return (
    <div className="main">
      <Titulo texto="Estadísticas"/>
      <CardEstadistica numero={contarMayoresA(35)} texto="personas mayores a 35 años"/>
      <CardEstadistica numero={mayorEdad} texto="es la mayor edad"/>
      <CardEstadistica numero={menorEdad} texto="es la menor edad"/>
    </div>
  );
}
export default EstadisticasScreen;
