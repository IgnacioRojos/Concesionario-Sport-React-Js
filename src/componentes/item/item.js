import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./item.css"
import React from "react";


const Item = ({id,titulo,marca,cantidad,precio,img})=>{
    return(
        <Card style={{ width: '18rem' }} className='tarjeta'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    Marca: {marca}<br/>
                    precio: {precio}<br/>
                    Stock: {cantidad}
                </Card.Text>
                
                <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
            </Card.Body>
        </Card>
        

    )
}

export default Item