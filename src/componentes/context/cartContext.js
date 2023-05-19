import { createContext, useState } from "react";
import { Autos } from '../DataAutos/data.js'; 



export const cartContext = createContext({
    cart: []
})

export const CartProvider = ({children }) =>{
    const [cart,setCart] = useState([])

    console.log(cart)

    const addAuto = (auto,cantidadAgregada) =>{
        if(!isInCart(auto.id)) {
            setCart(prev => [...prev, {...auto,cantidadAgregada}])
        } else{
            console.error("el auto ya fue agregado")
        }
    }

    const removeAuto = (id) =>{
        const cartUpdated = cart.filter(c => c.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([]);
    }

    const isInCart = (id)=>{
        return cart.some(c => c.id === id)
    }

    const getTotal = () =>{
        let total = 0; 
        cart.forEach((c) =>{
            total = total + (c.cantidadAgregada * parseInt(Autos.precio) )
        })
        return total;
    }

    return(
        <cartContext.Provider value={{cart, addAuto, removeAuto, clearCart, isInCart,getTotal}}>
            {children}
        </cartContext.Provider>
    )

}