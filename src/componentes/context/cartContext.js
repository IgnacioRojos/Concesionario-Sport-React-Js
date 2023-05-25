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

    const getTotal = () =>{
        let total = 0; 
        cart.forEach((c) =>{
            total = total + (c.cantidadAgregada * c.precio )
        })
        return total;
    }

    const cantidad = ()=>{
        let quantity = 0;
        cart.forEach((c)=>{
            quantity = quantity + c.cantidadAgregada 
        })
        return quantity;
    }

    return(
        <cartContext.Provider value={{cart, addAuto, removeAuto, clearCart, isInCart,getTotal,cantidad}}>
            {children}
        </cartContext.Provider>
    )

}