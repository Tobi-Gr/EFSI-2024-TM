const InputText = (props) => {
    return (        
        <div>
            <label className = "prompt"> {props.prompt}</label>
            <br/>
            <input className = "inputText almost-full-width" type="text" id={props.id} value={props.value} onChange={props.onChange} />
        </div>
    );
}

export default InputText;