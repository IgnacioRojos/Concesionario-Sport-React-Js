
/*Importacion de bootstrap react*/
import Alert from 'react-bootstrap/Alert';
import { getAutos } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
/*Funcion de itemlist con un mensaje de bienvenida con props, el mensaje es un alert traido de bootstrap*/

const ItemListConteiner = ({titulo}) =>{

    const[arrayAutos,setArrayAutos]= useState([])

    useEffect(()=>{
        getAutos()
            .then(Response=>{
                setArrayAutos(Response)
            })
            .catch(Error=>{
                console.log(Error)
            })

    },[])

    
    if(arrayAutos.length===0){
        return(
            <h2>Cargando Autos...</h2>
        )
    }else{
        return(
            <>
                {[
                    'danger',
                ].map((variant) => (
                    <Alert key={variant} variant={variant} className='mensaje'>
                        {titulo}
                    </Alert>
    
                ))}
                
                <ItemList autos={arrayAutos}/>
    
    
            </>
        )
    }

}

export default ItemListConteiner;