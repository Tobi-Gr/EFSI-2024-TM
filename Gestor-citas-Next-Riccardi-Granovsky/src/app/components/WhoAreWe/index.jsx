function WhoAreWe(props) {
    return (
    <div>
      <div>
      <img src={props.image} alt={props.alt} />
        <h4><b>{props.texto}</b></h4>
      </div>
    </div>
    );
  }

export default WhoAreWe;