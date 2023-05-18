import { createContext, useState } from "react";

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

    const getTotal = (precio) =>{
        var total = 0; 
        cart.forEach((c) =>{
            total += (c.cantidadAgregada * precio )
        })
        return total;
    }

    return(
        <cartContext.Provider value={{cart, addAuto, removeAuto, clearCart, isInCart,getTotal}}>
            {children}
        </cartContext.Provider>
    )

}