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
  
        //procesar la data
        const updatedData = json_data.data.map(country => {
          // Cambiar las bandera inválidas
          if (country.name === "Vatican City State (Holy See)") {
            return {
              ...country,
              flag: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg"
            };
          }
          
          if (country.name === "Sao Tome and Principe")
          {
            return {
              ...country,
              flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg"
            };
          }

          // Devolver las islas malvinas
          if (country.name === "Falkland Islands") {
            return {
              ...country,
              name: "Islas Malvinas"
            };
          }
  
          return country;
        });
  
        setCountries(updatedData);
        setUnusedCountries(updatedData);
      } catch (error) {
        // setError(error.message);
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

 const checkAnswer = (index) => { 
   let selectedCountry = options[index]
   if (selectedCountry === currentCountry){
     setScore(prevScore => prevScore + 10);
   }
   else{
     setScore(prevScore => prevScore - 1);
   }
   setUpQuestion();
 };

  return (
    <main className={styles.main}>
      {currentCountry?.flag ? 
      (
        // Muestra si hay bandera
        <div>
          <h2 className={`${styles.score} ${styles.text}`}>Score: {score}</h2>
          <div className={styles.question}>
            <Image
              src={currentCountry.flag}
              height={500}
              width={700}
              alt="bandera"
              className={styles.flag}
            />
            {options.map((option, index) => (
              <button
              key={index}
              className={`${styles.btn} ${styles.text}`}
              onClick={() => checkAnswer(index)}
              >
                {option?.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // Muestra si no hay bandera
        <div className={styles.endMessage}>
          <h2 className={styles.gameOver}>Terminaste!</h2>
          <h1 className={styles.endScore}>{score}</h1>
          <h4 className={styles.detail}>Recarga la página para volver a empezar</h4>
        </div>
      )}
    </main>
  );
}