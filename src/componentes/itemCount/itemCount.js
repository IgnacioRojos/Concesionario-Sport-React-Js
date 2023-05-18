/*importaciones de useState*/
import "./itemCount.css";
import { useState } from "react";

/*Componente itemCount donde se incremente o decrementa la cantidad de productos segun el stock que se maneja*/

const ItemContador =({stock, inicial, onAdd })=>{
    const[valor,setValor]= useState(inicial)

    const incrementar = ()=>{
        if(valor < stock){
            setValor(valor + 1)
        }
    }

    const decrementar = ()=>{
        if(valor >1){
            setValor(valor - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={incrementar}>+</button>
                <h4 className="number">{valor}</h4>
                <button className="button" onClick={decrementar}>-</button>
            </div>
            <button className="buttonComprar" onClick={()=> onAdd(valor)} disabled={!stock}>
                    Agregar Al Carrito
            </button>
            
            

        </div>
        
    )

}

export default ItemContador;