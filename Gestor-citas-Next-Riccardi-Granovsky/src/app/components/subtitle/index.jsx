import styles from "./../../page.module.css";


const Subtitulo = (props) => {
    return (
      <div className={styles.columnTitle}>
        <h2>{props.texto}</h2>
      </div>
    );
  }

export default Subtitulo;
  