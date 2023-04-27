/*Importacion de bootstrap react y de el cartWidget*/

import Button from 'react-bootstrap/Button';
import CartWidget from "../cartWidget/cartWidget";

/*Funcion de la navBar con botones traidos de Bootstrap react,por debajo esta el component cartWidget(imagen con el numero hardcoreado*/

const navBar= () =>{
    return(
        <nav className='header'>
            <h3 className='tituloNegocio'>Concesionario Sport</h3>
            <div className='botones'>
                <Button variant="warning">Autos 0KM</Button>
                <Button variant="info">Autos Usados</Button>
                <Button variant="success">Motos 0KM</Button>
                <Button variant="info">Mostos Usadas</Button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default navBar;