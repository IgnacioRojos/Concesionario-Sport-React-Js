
/*Importacion de bootstrap react*/
import Alert from 'react-bootstrap/Alert';
import { getAutos, getCategoriaAutos } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
/*Funcion de itemlist con un mensaje de bienvenida con props, el mensaje es un alert traido de bootstrap*/

const ItemListConteiner = ({titulo}) =>{

    const[arrayAutos,setArrayAutos]= useState([])

    const [show, setShow] = useState(true);

    const {categoriaMarca} = useParams()

   
    useEffect(()=>{
        const asyncFunc = categoriaMarca ? getCategoriaAutos : getAutos
        asyncFunc(categoriaMarca)
            .then(Response=>{
                setArrayAutos(Response)
            })
            .catch(Error=>{
                console.log(Error)
            })

    },[categoriaMarca])

    
    if(arrayAutos.length===0){
        return(
            <h2>Cargando Autos...</h2>
        )
    }else{
        return(
            <>
                
                 {['danger'].map((variant) => (
                        <Alert show={show} key={variant} variant={variant} className='mensaje'>
                            {titulo}<br/>
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Cerrar
                            </Button>
                        </Alert>
                    ))}
                    
                    
                
                
                
                <ItemList autos={arrayAutos}/>
    
    
            </>
        )
    }

}

export default ItemListConteiner;