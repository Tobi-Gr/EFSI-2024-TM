import styles from "./../../page.module.css";
const cardPersona = ({persona}) => {    
    return (
        <div className={styles.cardPersona}>
            <h1 className={styles.cardNombre}>{persona.nombre + " " + persona.apellido}</h1>
        </div>
    );
}

export default cardPersona;