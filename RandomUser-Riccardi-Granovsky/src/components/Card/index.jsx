import React from "react";
import Button from "react-bootstrap/Button";

function Card(props) {
  return (
    <div className="card">
      <img src={props.user.picture.medium} className="card-img-top" alt="Portrait" />
      <div className="card-body">
        <h4 className="card-title">
          {props.user.name.title} {props.user.name.last}
        </h4>
        <Button variant="primary" onClick={() => props.onShowModal(props.user)}>
          Más info
        </Button>
      </div>
    </div>
  );
}

export default Card;
