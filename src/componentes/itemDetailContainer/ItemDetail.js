/*importaciones de react bootstrap y el componente itemCount*/

import ItemCount from "../itemCount/itemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';



/*Componente itemDetail donde muestra una card con mas datos sobre el auto y dentro de esta card se encuentra el componente itemCount para agregar o quitar ese producto del carrito*/


const ItemDetail = ({img,titulo,descripcion,marca,precio,cantidad,id}) =>{

    const [cantidadAgregada, setCantidadAgregadada ] = useState(0)

    const valorContexto = useContext(cartContext)
     

    const handleOnAdd = (cantidadAgregada) =>{
        setCantidadAgregadada(cantidadAgregada)     
  
        const auto = {
            id,titulo,precio,descripcion,marca,img,cantidad 
        }

        valorContexto.addAuto(auto,cantidadAgregada)
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                 <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><h5>Marca: {marca}</h5></ListGroup.Item>
                <ListGroup.Item><h5>Precio: {precio}</h5></ListGroup.Item>
                <ListGroup.Item><h5>Stock: {cantidad}</h5></ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {
                cantidadAgregada > 0 ?(
                    <Button className="button" variant="info"><Link to= "/cart" className="Option">Finalizar Compra</Link></Button>
                ) : (
                    <ItemCount stock={cantidad} inicial={1} onAdd={handleOnAdd}/>  
                )
            }
          
                      
      </Card.Body>
    </Card>
    )
}

export default ItemDetail;