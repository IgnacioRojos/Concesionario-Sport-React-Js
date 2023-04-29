import ItemCount from "../itemCount/itemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = (img,titulo,descripcion,marca,precio,cantidad) =>{
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
                <ListGroup.Item>{marca}</ListGroup.Item>
                <ListGroup.Item>{precio}</ListGroup.Item>
                <ListGroup.Item>{cantidad}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <ItemCount stock={1} inicial={1}/>            
      </Card.Body>
    </Card>
    )
}

export default ItemDetail;