import ButtonLink from "../Button";

const Card = ({ cita, eliminarCita }) => {
  const handleClick = (event) => {
    eliminarCita(cita, event);
  };

  return (
    <div className="cita">
      <p><b>Nombre mascota:</b> {cita.nombre}</p>
      <p><b>Animal:</b> {cita.animal}</p>
      <p><b>Nombre dueño: </b>{cita.duenio}</p>
      <p><b>Fecha:</b> {cita.fecha}</p>
      <p><b>Hora:</b> {cita.hora}</p>
      <p><b>Sintomas:</b> {cita.sintomas}</p>
      <button type="submit" onClick={handleClick}>Eliminar</button>
    </div>
  );
};

export default Card;
