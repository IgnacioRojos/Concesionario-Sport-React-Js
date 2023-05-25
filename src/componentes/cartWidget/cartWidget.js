import foto from "./assets/carrito.jpg"
import { Link } from "react-router-dom";
import "./cartWidget.css";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";

const Cart = () => {
    const {cantidad} = useContext(cartContext)
    return(
        <Link to={"/cart"} className="linkCarrito" style={{}}>
            <div>

                <img src={foto} alt="cart-widget" width="90px"/>

                <p>{cantidad()}</p>
                
            </div>
        </Link>
    )   
}

export default Cart;