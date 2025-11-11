import Button from "react-bootstrap/Button";
import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="nav-left">
        <Link to="/" className="tituloNegocio">
          <h2>Concesionario <span>Sport</span></h2>
        </Link>
      </div>

      <div className="botones">
        <NavLink to="/" className="link">
          <Button className="boton">Todos</Button>
        </NavLink>

        <NavLink to="marca/fiat" className="link">
          <Button className="boton">Fiat</Button>
        </NavLink>

        <NavLink to="marca/wolsvagen" className="link">
          <Button className="boton">Volkswagen</Button>
        </NavLink>

        <NavLink to="marca/chevrolet" className="link">
          <Button className="boton">Chevrolet</Button>
        </NavLink>

        <NavLink to="marca/ford" className="link">
          <Button className="boton">Ford</Button>
        </NavLink>

        <NavLink to="marca/toyota" className="link">
          <Button className="boton">Toyota</Button>
        </NavLink>

        <NavLink to="marca/jeep" className="link">
          <Button className="boton">Jeep</Button>
        </NavLink>
      </div>

      <div className="nav-right">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
