import { useEffect,useState } from "react";
import { getFiltroAutos } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const [auto, setAuto] = useState([])

    const{autoId} = useParams()

    useEffect(()=>{
        getFiltroAutos(autoId)
            .then(response=>{
                setAuto(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[autoId])

    if(auto.length === 0){
        return(
            <div className="ItemDetailConteiner">
                <h1>Cargando Detalle...</h1>
            </div>
        )
    }else{
        return(
            <div className="ItemDetailConteiner">
                <ItemDetail {...auto}/>
            </div>
        )
    }
   
}

export default ItemDetailContainer;