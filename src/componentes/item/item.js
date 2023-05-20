/*imports de react router dom, la card de react bootstrap*/

import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./item.css"
import React from "react";
import Button from 'react-bootstrap/Button';

/*el componente item con sus atributos para mostrar la tarjeta del auto con sus datos*/

const Item = ({id,titulo,marca,cantidad,precio,img})=>{
    return(
        <Card style={{ width: '18rem' }} className='tarjeta'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title><h3>{titulo}</h3></Card.Title>
                <Card.Text>
                    <h5>Marca: {marca}</h5><br/>
                    <h5>Precio: {precio}</h5><br/>
                    <h5>Stock: {cantidad}</h5>
                </Card.Text>
                
                <Button variant="info"><Link to={`/item/${id}`} className="Option">Ver Detalle</Link></Button>
            </Card.Body>
        </Card>
        

    )
}

export default Item