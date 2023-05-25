import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./cart.css";


const Cart = () => {
    const {cart, clearCart,removeAuto,getTotal}= useContext(cartContext) 
    
    if(cart.length === 0){
        return(
            <div>
                <h1 className="advertencia">No Hay Productos En El Carrito</h1>
                <Button variant="info"><Link to="/" className="option">Volver A Comprar</Link></Button>
            </div>
        )
    }else{
        return(
            <div className="cardCarrito">
                {cart.map((item)=>
                    <Card>
                        <Card.Body className="cart-item-container">
                            <Card.Title><h2>{item.titulo}:</h2></Card.Title>
                            <Card.Img variant="top" src={item.img} style={{ width: '18rem' }}/>
                            <Card.Text>
                                <h4>Marca: {item.marca}</h4> <br/>

                                <h4>Precio: {item.precio}</h4><br/>

                                <h4>cantidad: {item.cantidadAgregada}</h4>  
                            </Card.Text>
                            
                            <Button onClick={()=> removeAuto(item.id)} variant="danger">Eliminar Auto</Button>
                        </Card.Body>
                    </Card>
                )}
                
                <h3 className="total">Total: {getTotal()}</h3>

                <Button onClick={()=> clearCart() } className="button" variant="danger"> Limpiar El Carrito</Button>
                
                <Button className="button" variant="info"><Link to={`/checkOut`} className="linkCheck">Finalizar La Compra</Link></Button>
            </div>
        )
    }
    
}



export default Cart;