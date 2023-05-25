import "./navBar.css"
import Button from 'react-bootstrap/Button';
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navBar= () =>{

    return(
        <nav className='header'>

            <Link to={`/`} className='tituloNegocio'> <h3>Concesionario Sport</h3> </Link>

            <div className='botones'>
                <NavLink to="/"className= {({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} id="boton">

                    <Button className='boton' variant="light">Todos Los Autos</Button>

                </NavLink>

                <NavLink to={`marca/fiat`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "" } id="boton">

                     <Button className='boton' variant="warning">Fiat</Button>

                </NavLink>

                <NavLink to={`marca/wolsvagen`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "" } id="boton">

                     <Button className="boton" variant="info">Wolsvagen</Button>

                </NavLink>

                <NavLink to={`marca/chevrolet`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} id="boton">

                     <Button className="boton" variant="success">Chrevrolet</Button>

                </NavLink>

                <NavLink to={`marca/ford`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} id="boton">

                     <Button className="boton" variant="danger">Ford</Button>

                </NavLink>

                <NavLink to={`marca/toyota`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} id="boton">

                     <Button className='boton' variant="secondary">Toyota</Button>

                </NavLink>

                <NavLink to={`marca/jeep`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} id="boton">

                     <Button className='boton' variant="dark">Jeep</Button>
                      
                </NavLink>

            </div>

            <CartWidget/>

        </nav>
    )
}

export default navBar;