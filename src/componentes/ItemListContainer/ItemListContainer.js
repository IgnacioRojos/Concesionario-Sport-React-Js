import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { getAutos, getAutosPorCategoria } from '../../utils.js';

const ItemListConteiner = ({titulo}) =>{

    const[arrayAutos,setArrayAutos]= useState([])

    const [show, setShow] = useState(true);

    const {categoriaMarca} = useParams()

   
    useEffect(()=>{
        const asyncFunc = categoriaMarca ? ()=> getAutosPorCategoria(categoriaMarca) : getAutos
        
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
            <h2 className='tituloAlerta'>Cargando Autos...</h2>
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