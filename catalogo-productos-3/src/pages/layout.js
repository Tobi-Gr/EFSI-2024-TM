import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from './../components/ModalCarrito';
import logo from './../assets/logo.png';
import carrito from './../assets/carrito.png'

const Layout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav>
        <ul>
          <li>            
            <Link to="/">
                <img src={logo} alt="Logo" className="logo-nav"/>
            </Link>
          </li>
          <li>
            <h1 className="nombre-nav">Lorem's</h1>
          </li>
          <li>
            <Link to="/productos" className="item-nav">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="item-nav">Contacto</Link>
          </li>
          <li className="carrito-item">
            <img src={carrito} alt="Carrito" className="carrito-nav" onClick={toggleModal}/>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onClose={toggleModal}/>
      <Outlet />
    </>
  )
};

export default Layout;