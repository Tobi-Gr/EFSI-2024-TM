"use client";

import React, { useEffect } from 'react';
import styles from "./page.module.css";
import CardPersona from "./components/cardPersona";
import Personas from './data/Personas';
//listado de personas y menú de navegación

export default function Home() {  
  return (
    <main className={styles.main}>
      <h1>Directorio de personas</h1>
      <CardPersona persona={Personas[0]}/>
    </main>
  );
}
