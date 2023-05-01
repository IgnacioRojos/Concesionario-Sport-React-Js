/*importaciones de react bootstrap y el componente itemCount*/

import ItemCount from "../itemCount/itemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

/*Componente itemDetail donde muestra una card con mas datos sobre el auto y dentro de esta card se encuentra el componente itemCount para agregar o quitar ese producto del carrito*/

const ItemDetail = ({img,titulo,descripcion,marca,precio,cantidad}) =>{
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
            <ItemCount stock={10} inicial={0}/>            
      </Card.Body>
    </Card>
    )
}

export default ItemDetail;