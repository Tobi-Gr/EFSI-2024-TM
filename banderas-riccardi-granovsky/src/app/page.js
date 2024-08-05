"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0); 
  const [countries, setCountries] = useState([]);
  const [unusedCountries, setUnusedCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(); // por el que se está preguntando
  const [options, setOptions] = useState([]);

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
        //setError(error.message);
        console.log(error.message);
      }
    };
    
    fetchCountries();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      setUpQuestion();
    }
  }, [countries]);

  const getRandomCountry = () => { //Para conseguir del que va a ser la bandera y la respuesta correcta
    if (countries.length === 0) return null; // Para cuando este vacío
    let randomIndex = getRandomNumber(unusedCountries.length);
    let selectedCountry = unusedCountries[randomIndex];
    setUnusedCountries(unusedCountries.filter((_, index) => index !== randomIndex));
    setCurrentCountry(selectedCountry);
  };

  const getRandomNumber = (max) => { //no incluye a max
    return Math.floor(Math.random() * max);
  }

  const getOptions = () => { 
    let options_temp = [];
    let correctAnswerPos = getRandomNumber(4); // devuelve num entre 0-3 para la posicion de la respuesta correcta

    // pone respuestas incorrectas hasta la posición de la correcta
    while (options_temp.length < correctAnswerPos) {
        let randomIndex = getRandomNumber(countries.length);
        if (!options_temp.includes(countries[randomIndex]) && countries[randomIndex] !== currentCountry) {
            options_temp.push(countries[randomIndex]);
        }
    }

    // pone la respuesta correcta
    options_temp.splice(correctAnswerPos, 0, currentCountry);

    // termina de completar las respuestas incorrectas
    while (options_temp.length < 4) {
        let randomIndex = getRandomNumber(countries.length);
        if (!options_temp.includes(countries[randomIndex]) && countries[randomIndex] !== currentCountry) {
            options_temp.push(countries[randomIndex]);
        }
    }

    setOptions(options_temp);
  }

  const setUpQuestion = () => {
    getRandomCountry();
  }

  useEffect(() => {
    if(currentCountry){
      getOptions();
    }
  }, [currentCountry]);

  return (
    <main className={styles.main}>
      {/* Muestra si hay bandera */}
      {currentCountry?.flag && (
        <div className={styles.question}>
          <Image
            src={currentCountry.flag}
            height={500}
            width={700}
            alt="bandera"
            className={styles.flag}
            />

          {/*usar el index para ver q país clickearon*/}
          {options.map((option, index) => ( 
            <button key={index} className={styles.btn} onClick={() => console.log(currentCountry)}>{option?.name}</button>
          ))}
        </div>
      )}
    </main>
  );
}
