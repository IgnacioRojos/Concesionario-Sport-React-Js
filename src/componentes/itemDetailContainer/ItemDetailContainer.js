/*importaciones de useState, useEfect, componente itemDetail, el archivo asyncMock y css*/

import { useEffect,useState } from "react";
/*import { getFiltroAutos } from "../asyncMock";*/
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css"
import{getAutosPorCategoria} from '../../utils.js';

/*componente que contiene al itemDetail utilizando un efecto para poder mostrar un solo item con sus datos*/

const ItemDetailContainer = ()=>{

    const [auto, setAuto] = useState([])

    const{autoId} = useParams()

    useEffect(()=>{
        const res = getAutosPorCategoria(autoId)
        res.then((resultado)=>{
            setAuto(resultado);
        });
        


        /*getFiltroAutos(autoId)
            .then(response=>{
                setAuto(response)
            })
            .catch(error=>{
                console.error(error)
            })*/
    },[autoId])

    if(auto.length === 0){
        return(
            <div className="ItemDetailConteiner">
                <h1>Cargando Detalle...</h1>
            </div>
        )
    }else{
        return(
            <div className="ItemDetailConteiner2">
                <ItemDetail {...auto}/>
            </div>
        )
    }
   
}

export default ItemDetailContainer;