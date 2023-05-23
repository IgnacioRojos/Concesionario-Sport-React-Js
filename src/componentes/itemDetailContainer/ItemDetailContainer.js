/*importaciones de useState, useEfect, componente itemDetail, el archivo asyncMock y css*/

import { useEffect,useState } from "react";
/*import { getFiltroAutos } from "../../asyncMock";*/
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css"
import{getAutosPorCategoria,filtroAutos} from '../../utils.js';
import { db } from "../../firebase";
import {getDoc,doc} from 'firebase/firestore';

/*componente que contiene al itemDetail utilizando un efecto para poder mostrar un solo item con sus datos*/

const ItemDetailContainer = ()=>{
    const [auto, setAuto] = useState({})

    const{autoId} = useParams()

    const filtroAutos = async (autoId) =>{
        
        const  docRef = doc(db,"Autos",autoId)
        getDoc(docRef)
            .then((response) =>{
                const data = response.data()
                const autosAdapter = {id: response.id, ...data }
                setAuto(autosAdapter)
            })
        /*try{
            const documentoAuto = doc(db,"Autos",autoId)
            const response = await getDoc(documentoAuto);
            response.data()
            setAuto({id: response.id, ...response.data()})
                const data = doc.data();
                const id =doc.id;    
                data.id = id;
                return data;*/
            
         
        .catch(err =>{
            console.log(err)
        })
            
        
    }


    useEffect(()=>{ 
        filtroAutos()
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