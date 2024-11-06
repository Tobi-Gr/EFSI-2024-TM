import { Outlet, Link } from "react-router-dom";

import logo from './../assets/logo.png';
import carrito from './../assets/carrito.png'

const Layout = () => {
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
            <img src={carrito} alt="Carrito" className="carrito-nav"/>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;