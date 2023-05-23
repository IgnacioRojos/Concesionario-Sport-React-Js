/*importaciones de useState, useEfect, componente itemDetail, el archivo asyncMock y css*/

import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css"
import { db } from "../../firebase";
import {getDoc,doc} from 'firebase/firestore';


/*componente que contiene al itemDetail utilizando un efecto para poder mostrar un solo item con sus datos*/

const ItemDetailContainer = ()=>{
    const [auto, setAuto] = useState({})
    /*const[loading, setLoading] = useState(true)*/

    const{autoId} = useParams()

    const filtroAutos = async (autoId) =>{
        try{
            const documentoAuto = doc(db,"Autos2",autoId)
            const response = await getDoc(documentoAuto);
            response.data()
            setAuto({id: response.id, ...response.data()})
                const data = doc.data();
                const id =doc.id;    
                data.id = id;
                return data;  
        }
        catch (error) {
            console.log(error)
        }
 
    };


    useEffect(()=>{ 
        filtroAutos(autoId)
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