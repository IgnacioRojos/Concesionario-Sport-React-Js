/*importaciones de la foto del carrito*/
import foto from "./assets/carrito.jpg"
import { Link } from "react-router-dom";
import "./cartWidget.css";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";

/*Componente cardWidget donde se muestra una imagen de un carrito, debajo de esta hay un numero hardcodeado mostrando la cantidad de cosas que hay en el carrito
*/
const Cart = () => {
    const {cantidadAgregada} = useContext(cartContext)
    
    return(
        <Link to={"/cart"} className="linkCarrito" style={{}}>
            <div>
                <img src={foto} alt="cart-widget" width="90px"/>
                <p>{cantidadAgregada}</p>
            </div>
        </Link>
    )   
}

export default Cart;