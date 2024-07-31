import {useState} from 'react';
import ButtonLink from '../Button';
import InputText from '../InputText';

const Form = ({ agregarCita }) => {
  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');
  const [duenio, setDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
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
        <label className="prompt">Fecha</label>
        <br />
        <input className="inputDate almost-full-width" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <label className="prompt">Hora</label>
        <br />
        <input className="inputTime almost-full-width" type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <label className="prompt">Síntomas</label>
        <br />
        <input className="inputText almost-full-width" type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        <ButtonLink texto="Agregar cita" id="agregar-cita" type="submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};


export default Form;