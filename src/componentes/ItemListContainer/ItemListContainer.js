
/*Importacion de bootstrap react*/

import Alert from 'react-bootstrap/Alert';

/*Funcion de itemlist con un mensaje de bienvenida con props, el mensaje es un alert traido de bootstrap*/

const ItemList = ({titulo}) =>{
    return(
        <>
            {[
                'danger',
            ].map((variant) => (
                <Alert key={variant} variant={variant} className='mensaje'>
                    {titulo}
                </Alert>
            ))}


        </>


    )
}

export default ItemList;