/*Importacion de bootstrap react,el cartWidget, las importaciones de react route dom*/
import "./navBar.css"
import Button from 'react-bootstrap/Button';
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

/*Funcion de la navBar con botones traidos de Bootstrap react,por debajo esta el component cartWidget(imagen con el numero hardcoreado
Cada boton tiene un navlink que sirve para filtrar por la marca del auto, el titulo del concesionario tiene un link que vuelve al catalogo completo
al final esta el componente cartWidget donde esta la imagen del carro con un numero hardcodeado*/

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