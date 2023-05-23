/*importaciones de useState*/
import "./itemCount.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

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
                <Button className="buttoninc" onClick={incrementar}>+</Button>
                <h4 className="number">{valor}</h4>
                <Button className="buttondec" onClick={decrementar}>-</Button>
                
            </div>
            <Button className="buttonComprar" onClick={()=> onAdd(valor)} disabled={!stock}>
                    Agregar Al Carrito
            </Button>
            
            

        </div>
        
    )

}

export default ItemContador;