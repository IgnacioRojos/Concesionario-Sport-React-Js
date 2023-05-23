import { useState } from "react";
import Button from "react-bootstrap/esm/Button";



const CheckOutForm = ({onConfirm})=>{
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [tel, setTel]= useState("")

    const handleConfirm = (e) =>{
        e.preventDefault()
        const usuDatos ={
            nombre,email,tel
        }

        onConfirm(usuDatos)
    }
    
    return(
        <div className="container">
            <form onSubmit={handleConfirm}className="Form"> 
                <label className="Label"> 
                    Nombre
                    <input className="Input" type="text" value={nombre} onChange={({target})=> setNombre(target.value)}/>
                </label>
                <label className="Label">
                    Telefono
                    <input className="Input" type="text" value={tel} onChange={({target})=> setTel(target.value)}/>
                </label>
                <label className="Label">
                    Email
                    <input className="Input" type="text" value={email} onChange={({target})=> setEmail(target.value)}/>
                </label>
                <div className="Label">
                    <Button className="Button" type="submit" onClick={handleConfirm}>Crear Orden</Button>
                </div>
            </form>
            
        </div>
    )    







}

export default CheckOutForm;