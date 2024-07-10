const InputArea = (props) => {
    return (
        <div>
            <label className = "prompt"> {props.prompt}</label>
            <br/>
            <textarea className = "textArea almost-full-width" id={props.id}/>
        </div>
    );
}

export default InputArea;