function Educacion(props) {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src={props.imageSrc} alt={props.alt}/>
          </div>
          <div className="flip-card-back">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
      </div>
    );
  }

export default Educacion