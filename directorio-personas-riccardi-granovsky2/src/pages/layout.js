import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="ul-navbar">
          <li className="li-navbar">
            <Link to="/">Home</Link>
          </li>
          <li className="li-navbar">
            <Link to="/estadisticas">Estadísticas</Link>
          </li>
          <li className="li-navbar">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;