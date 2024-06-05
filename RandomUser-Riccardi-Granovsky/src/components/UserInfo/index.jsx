import React from "react";
import Modal from "react-bootstrap/Modal";

function UserInfo({ user, onCloseModal }) {
  return (
    <>
      <Modal show={true} onHide={onCloseModal}>
        <Modal.Header closeButton X>
          <Modal.Title>{user.name.title} {user.name.first} {user.name.last}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={user.picture.large} className="card-img-top img-modal" alt="Portrait" />
          <p><b>Edad</b>: {user.dob.age}</p>
          <p><b>Email</b>: {user.email}</p>
          <p><b>Celular</b>: {user.phone}</p>
          <p><b>Dirección</b>: {user.location.street.number} {user.location.street.name}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserInfo;
