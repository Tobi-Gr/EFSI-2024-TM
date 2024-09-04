import styles from "./../../page.module.css";
const cardPersona = ({persona}) => {    
    return (
        <div className={styles.cardPersona}>
            <h1 className={styles.cardNombre}>{persona.nombre + " " + persona.apellido}</h1>
            <h2 className={styles.cardEmail}>{persona.email}</h2>
            <h3>{persona.edad} años</h3>
        </div>
    );
}

export default cardPersona;