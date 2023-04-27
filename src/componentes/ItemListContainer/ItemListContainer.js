
/*Importacion de bootstrap react*/
import Alert from 'react-bootstrap/Alert';
import { getAutos } from '../../AsyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
/*Funcion de itemlist con un mensaje de bienvenida con props, el mensaje es un alert traido de bootstrap*/

const ItemListConteiner = ({titulo}) =>{

    const[autos,setAutos]= useState([])

    useEffect(()=>{
        setAutos(getAutos())
    },[])




    return(
        <>
            {[
                'danger',
            ].map((variant) => (
                <Alert key={variant} variant={variant} className='mensaje'>
                    {titulo}
                </Alert>

            ))}
            
            <ItemList auto={autos}/>


        </>
    
         

        


    )
}

export default ItemListConteiner;