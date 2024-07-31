"use client";
//foto para el fondo: https://www.freepik.es/vector-gratis/coleccion-banderas-ondeando_1152871.htm#fromView=search&page=1&position=6&uuid=e074ce47-8139-4f19-8b24-c4020251f31f


import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [usedCountries, setUsedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
        if (!res.ok) {
          throw new Error("Request invalid");
        }
        const json_data = await res.json();
        setCountries(json_data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchCountries();
  }, []);

  const getRandom = () => {
    if (countries.length === 0) return; // Handle the case where the array might be empty
    let randomIndex = Math.floor(Math.random() * countries.length);
    let selectedCountry = countries[randomIndex];
    const updatedCountries = countries.filter((_, index) => index !== randomIndex);
    setCountries(updatedCountries);
    return selectedCountry;
  };

  return (
    <main className={styles.main}>
      <button onClick={() => getRandom()}>PRESS ME </button>
      {/* You can also add some UI elements here to display selectedCountry or error messages */}
    </main>
  );
}
