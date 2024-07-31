import {useState} from 'react';
import InputText from '../InputText';
import styles from "./../../page.module.css";

const Form = ({ agregarCita }) => {
  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');
  const [duenio, setDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    console.log("agregaste una cita");
    e.preventDefault();
    agregarCita(nombre, animal, duenio, fecha, hora, sintomas);
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText prompt="Nombre mascota" id="nombre" onChange={(e) => setNombre(e.target.value)} />
        <InputText prompt="Animal" id="animal" onChange={(e) => setAnimal(e.target.value)} />
        <InputText prompt="Nombre dueño" id="duenio" onChange={(e) => setDuenio(e.target.value)} />
        <label className={styles.prompt}>Fecha</label>
        <br />
        <input className={`${styles.almostFullWidth} ${styles.input}`} type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <label className={styles.prompt}>Hora</label>
        <br />
        <input className={`${styles.almostFullWidth} ${styles.input}`} type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <label className={styles.prompt}>Síntomas</label>
        <br />
        <input className={`${styles.almostFullWidth} ${styles.input}`} type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        <br/>
        <button className={styles.buttonCard} id="agregar-cita" type="submit" onClick={handleSubmit}>Agregar cita</button>
      </form>
    </div>
  );
};


export default Form;