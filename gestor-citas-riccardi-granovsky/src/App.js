import './App.css';
import Cita from './classes/cita';
import Card from './components/Card';
import Form from './components/Form';
import React, { useState } from 'react';
import Subtitulo from './components/Subtitulo/';
//falta lo de eliminar y las alertas


function App() {
  const [citas, setCitas] = useState([]);
  const [id_cita, setId_cita] = useState(0);
  function AgregarCita(nombre, animal, duenio, fecha, hora, sintomas){
    const confirmacion = window.confirm("¿Querés agregar esta cita?");
    if (confirmacion) {
      let nuevaCita = new Cita(id_cita, nombre, animal, duenio, fecha, hora, sintomas);
      setId_cita(id_cita + 1);
      setCitas([...citas, nuevaCita]);
  }};

  function eliminarCita(cita, event) { //No entra a la funcion 
    event.preventDefault();
    const confirmacion = window.confirm("¿Querés eliminar esta cita?");
    if(confirmacion){
      let citasActualizadas = citas.filter((c) => c.id !== cita.id);
      setCitas(citasActualizadas);
    }
  };

  return (
    <div>
      <div className="titulo">
        <h1>Administrador de pacientes</h1>
      </div>
      <div className="row">      
        <div className="column ">
              <Subtitulo texto="Crear mi cita"/>
              <Form agregarCita={AgregarCita}/>
        </div>
        <div className="column">
              <Subtitulo texto="Administra tus citas"/>

                {citas.map((cita) => (                
                     <Card cita={cita} eliminarCita={eliminarCita}/>
                ))}
        </div>
      </div>
    </div>
  );
}

export default App;
