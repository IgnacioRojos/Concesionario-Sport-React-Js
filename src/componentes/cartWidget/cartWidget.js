/*importaciones de la foto del carrito*/
import foto from "./assets/carrito.jpg"

/*Componente cardWidget donde se muestra una imagen de un carrito, debajo de esta hay un numero hardcodeado mostrando la cantidad de cosas que hay en el carrito
*/
const Cart = () => {
    return(
        <div>
            <img src={foto} alt="cart-widget" width="90px"/>
            <p>1</p>
        </div>
    )
}

export default Cart;