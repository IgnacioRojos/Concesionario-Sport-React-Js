/*Importacion de bootstrap react y de el cartWidget*/
import "./navBar.css"
import Button from 'react-bootstrap/Button';
import CartWidget from "../cartWidget/cartWidget";

/*Funcion de la navBar con botones traidos de Bootstrap react,por debajo esta el component cartWidget(imagen con el numero hardcoreado*/





const navBar= () =>{
    return(
        <nav className='header'>
            <h3 className='tituloNegocio'>Concesionario Sport</h3>
            <div className='botones'>
                <Button className='boton' variant="warning">Fiat</Button>
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