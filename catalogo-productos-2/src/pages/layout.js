import { Outlet, Link } from "react-router-dom";

import logo from './../assets/logo.png';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>            
            <Link to="/">
                <img src={logo} alt="logo" className="logo-nav"/>
            </Link>
          </li>
          <li>
            <h1 className="nombre-nav">The ducking shop</h1>
          </li>
          <li>
            <Link to="/productos" className="item-nav">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="item-nav">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;