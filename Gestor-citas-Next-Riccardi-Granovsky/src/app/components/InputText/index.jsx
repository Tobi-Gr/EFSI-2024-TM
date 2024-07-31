import styles from "./../../page.module.css";

const InputText = (props) => {
    return (        
        <div>
            <label className={styles.prompt}> {props.prompt}</label>
            <br/>
            <input className={`${styles.almostFullWidth} ${styles.input}`} type="text" id={props.id} value={props.value} onChange={props.onChange} />
        </div>
    );
}

export default InputText;