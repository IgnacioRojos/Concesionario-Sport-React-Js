import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Card from 'react-bootstrap/Card';



const Cart = () => {
    const {cart, clearCart,removeAuto,getTotal}= useContext(cartContext) 
    
    if(getTotal=== 0){
            return(
                <div>
                    <h1>No Hay Productos En El Carrito</h1>
                    <Link to="/" className="option">Volver A Comprar</Link>
                </div>
            )
    } else{
        return(
            <div>
                {cart.map((item)=>
                    <Card>
                        <Card.Body className="cart-item-container">
                            <Card.Title>{item.titulo}</Card.Title>
                            <Card.Img variant="top" src={item.img} style={{ width: '18rem' }}/>
                            <Card.Text>
                                <p> Marca: {item.marca}<br/>
                                    Precio: {item.precio}<br/>
                                    cantidad: {item.cantidadAgregada}
                                </p>
                                
                            </Card.Text>
                            
                            <button onClick={()=> removeAuto(item.id)} variant="primary">Eliminar Auto</button>
                        </Card.Body>
                    </Card>
                )}
                
                <h3>{getTotal()}</h3>

                <button onClick={()=> clearCart() } className="button"> Limpiar El Carrito</button>
                <Link to="/checkOut">Finalizar La Compra</Link>
            </div>
        )
    }
    
}



export default Cart;