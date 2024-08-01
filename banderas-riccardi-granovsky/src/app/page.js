"use client";
//foto para el fondo: https://www.freepik.es/vector-gratis/coleccion-banderas-ondeando_1152871.htm#fromView=search&page=1&position=6&uuid=e074ce47-8139-4f19-8b24-c4020251f31f

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [unusedCountries, setUnusedCountries] = useState([]);
  const [currentCounty, setCurrentCountry] = useState(); // por el que se está preguntando
  let options = [];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        if (!res.ok) {
          throw new Error("Request invalid");
        }
        const json_data = await res.json();
        setCountries(json_data.data);
        setUnusedCountries(json_data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchCountries();
  }, []);

  const getRandomCountry = () => { //Para conseguir del que va a ser la bandera y la respuesta correcta
    if (countries.length === 0) return null; // Para cuando este vacío
    let randomIndex = getRandomNumber(unusedCountries.length);
    let selectedCountry = unusedCountries[randomIndex];
    setUnusedCountries(unusedCountries.filter((_, index) => index !== randomIndex));
    setCurrentCountry(selectedCountry);
    console.log("país seleccionado: ", currentCounty);
  };

  const getRandomNumber = (max) => { //no incluye a max
    return Math.floor(Math.random() * max);
  }

  const getOptions = () => { //van a haber tres respuestas incorrectas y una correcta
    options = [];
    let correctAnswerPos = getRandomNumber(5); //devuelve un número random desde 0 hasta 5 no inclusive para la posición de la respuesta correcta
    for (let i = 0; i< correctAnswerPos; i++) {
      do {
        var randomIndex = getRandomNumber(countries.length);
      } while (options.includes(countries[randomIndex]) || countries[randomIndex] == currentCounty);
      options.push(countries[randomIndex])
    }
    options.push(currentCounty);
    for (let i = correctAnswerPos; i < 4; i++) {
      do {
        randomIndex = getRandomNumber(countries.length);
      } while (options.includes(countries[randomIndex]) || countries[randomIndex] == currentCounty);
      options.push(countries[randomIndex])
    }
    console.log("opciones: ", options);
    return options;
  }

  return (
    <main className={styles.main}>
      <button onClick={getRandomCountry}>1st Press me</button>
      {currentCounty && currentCounty.flag && (
      <Image
        src={currentCounty.flag}
        height={500}
        width={700}
      />
    )}
      <button onClick={getOptions}>2nd Press me</button>
    </main>
  );
}
