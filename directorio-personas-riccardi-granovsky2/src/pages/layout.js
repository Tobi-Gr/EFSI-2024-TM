import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/estadisticas">Estadísticas</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;