import {db} from './firebase';
import { collection, getDocs, where, query} from 'firebase/firestore';

export const getAutos = () =>{
    const coleccionAutos =  collection(db,"Autos")
    return getDocs(coleccionAutos)
        .then((respuesta)=>{
            const arrayDocumentos = respuesta.docs
            const resultado = arrayDocumentos.map((doc)=>{
                const id =doc.id;
                const data = doc.data();
                data.id = id;
                return data;
            })
            return resultado
          
        })
        .catch((err) =>{
           console.log("error ") 
        })
}

export const getAutosPorCategoria = () =>{
    const coleccionAutos =  collection(db,"Autos")
    const filtro = query(coleccionAutos, where("marca","==","fiat"),where("marca","==","toyota"),where("marca","==","wolsvagen"),where("marca","==","chevrolet"),where("marca","==","jeep"),where("marca","==","ford"))
    getDocs(filtro)
    .then((respuesta)=>{
        const arrayDocumentos = respuesta.docs
        const resultado = arrayDocumentos.map((doc)=>{
            const id =doc.id;
            const data = doc.data();
            data.id = id;
            return data;
    })
    return resultado
      
    })
    .catch((err) =>{
        console.log(err) 
    })
}

