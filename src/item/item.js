import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id,titulo,marca,cantidad,precio,descripcion,img})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {marca}
                    {precio}
                    {cantidad}   
                </Card.Text>
                <Button variant="primary" id={id}>Comprar</Button>
            </Card.Body>
        </Card>
        

    )
}

export default Item