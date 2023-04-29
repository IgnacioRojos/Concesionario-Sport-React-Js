/*Importacion de bootstrap react y de el cartWidget*/
import "./navBar.css"
import Button from 'react-bootstrap/Button';
import CartWidget from "../cartWidget/cartWidget";
import { Link, Route,Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
/*Funcion de la navBar con botones traidos de Bootstrap react,por debajo esta el component cartWidget(imagen con el numero hardcoreado*/





const navBar= () =>{

    const tocoBoton=(e)=>{
        console.log(e.target.id)
    }


    return(
        <nav className='header'>

            <Link to={`/`}> <h3 className='tituloNegocio'>Concesionario Sport</h3> </Link>

            <div className='botones'>
                <NavLink to="/"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}> <Button className='boton' variant="light" onClick={tocoBoton} id = "1">Todos Los Autos</Button> </NavLink>

                <NavLink to={`ItemListContainer/:categoriaMarca`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}> <Button className='boton' variant="warning">Fiat</Button> </NavLink>

                <Button className="boton" variant="info">Wolsvagen</Button>

                <Button className="boton" variant="success">Chrevrolet</Button>

                <Button className="boton" variant="danger">Ford</Button> 

                <Button className='boton' variant="secondary">Toyota</Button>

                <Button className='boton' variant="dark">Jeep</Button>

            </div>

            <CartWidget/>

        </nav>
    )
}

export default navBar;