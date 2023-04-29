import { useEffect,useState } from "react";
import { getFiltroAutos } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const [autos, setAutos] = useState([])

    const{autoId} = useParams()

    useEffect(()=>{
        getFiltroAutos(autoId)
            .then(response=>{
                setAutos(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[autoId])

    return(
        <div className="ItemDetailConteiner">
            <ItemDetail {...autos}/>
        </div>
    )
}

export default ItemDetailContainer;