'use client';

import styles from "./../page.module.css";
import React, { useState } from 'react';
//import ButtonLink from "./../components/button";
import Subtitulo from "../components/subtitle";
import Form from "../components/form";
import Card from "../components/card";
import Link from 'next/link'

class Cita {
  constructor(id, nombre, animal, duenio, fecha, hora, sintomas) {
    this.id = id;
    this.nombre = nombre;
    this.animal = animal;
    this.duenio = duenio;
    this.fecha = fecha;
    this.hora = hora;
    this.sintomas = sintomas;
  }
}

export default function Reservation() {
  const [citas, setCitas] = useState([]);
  const [id_cita, setId_cita] = useState(0);
  function AgregarCita(nombre, animal, duenio, fecha, hora, sintomas){
    const confirmacion = window.confirm("¿Querés agregar esta cita?");
    if (confirmacion) {
      let nuevaCita = new Cita(id_cita, nombre, animal, duenio, fecha, hora, sintomas);
      setId_cita(id_cita + 1);
      setCitas([...citas, nuevaCita]);
  }};

  function eliminarCita(cita, event) { 
    event.preventDefault();
    const confirmacion = window.confirm("¿Querés eliminar esta cita?");
    if(confirmacion){
      let citasActualizadas = citas.filter((c) => c.id !== cita.id);
      setCitas(citasActualizadas);
    }
  };

  return (
    <div className={styles.layoutColumn}>
      <h1 className={styles.anotherTitle}>Administrador de pacientes</h1>
      <div className={styles.row}>      
        <div className={styles.column}>
              <Subtitulo texto="Crear mi cita"/>
              <Form agregarCita={AgregarCita}/>
        </div>
        <div className={styles.column}>
              <Subtitulo texto="Administra tus citas"/>
                {citas.map((cita) => (                
                     <Card cita={cita} eliminarCita={eliminarCita}/>
                ))}
        </div>
      </div>
      <Link href="/"><b>Volver</b></Link>
    </div>
  );
}
