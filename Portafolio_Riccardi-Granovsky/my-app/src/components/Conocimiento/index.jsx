function Conocimiento(props) {
    return (
    <div class="card">
      <div class="containerConocimiento">
      <img className="svg-conocimientos" src={props.imageSrc} alt={props.alt} />
        <h4><b>{props.texto}</b></h4>
      </div>
    </div>
    );
  }

export default Conocimiento