function Idioma(props) {
    return (
        <div className="cardIdioma">
        <img src={props.imageSrc} alt={props.alt} className="idiomaImg"/>
        <div class="container">
          <h4><b>{props.idioma}</b></h4>
          <p>{props.nivel}</p>
        </div>
      </div>
    );
  }

export default Idioma