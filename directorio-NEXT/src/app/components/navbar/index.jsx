import styles from "./../../page.module.css";
const navbar = () => {    
    return (
        <div className={styles.navbar}>
            <a href="#"> Personas</a> 
            <a href="#"> Estadisticas</a> 
            <a href="#"> Contacto</a>
        </div>
    );
}

export default navbar;