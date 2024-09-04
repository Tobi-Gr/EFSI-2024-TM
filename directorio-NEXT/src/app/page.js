"use client";

import React, { useEffect } from 'react';
import navbar from './components/navbar';
import styles from "./page.module.css";
import CardPersona from "./components/cardPersona";
import Personas from './data/Personas';
//listado de personas y menú de navegación

export default function Home() {  
  return (
    <div className={styles.colors}>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1>Directorio de personas</h1>
        </div>
        <div className={styles.cardsContainer}>
          {Personas.map(persona => (
              <CardPersona key={persona.id} persona={persona}/>            
          ))}
        </div>
      </main>
    </div>
  );
}
