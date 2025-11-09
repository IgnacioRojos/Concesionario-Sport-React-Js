import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import React from "react";
import Button from 'react-bootstrap/Button';
import "./item.css";

const Item = ({ id, titulo, marca, cantidad, precio, img }) => {
  return (
    <Card className="tarjeta">
      <div className="tarjeta-img-container">
        <Card.Img variant="top" src={img} className="tarjeta-img" />
      </div>

      <Card.Body className="tarjeta-body">
        <Card.Title className="tarjeta-titulo">{titulo}</Card.Title>

        <Card.Text className="tarjeta-info">
          <p><strong>Marca:</strong> {marca}</p>
          <p><strong>Precio:</strong> ${precio}</p>
          <p><strong>Stock:</strong> {cantidad}</p>
        </Card.Text>

        <Button className="btn-detalle">
          <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;