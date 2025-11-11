import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./checkOutForm.css"

const CheckOutForm = ({onConfirm})=>{
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [tel, setTel]= useState("")
    const [error, setError] = useState("")

    const handleConfirm = (e) =>{
        e.preventDefault()
        if (!nombre.trim() || !email.trim() || !tel.trim()) {
            setError("Por favor, completá todos los campos antes de continuar.");
            return;
        }


        const usuDatos ={
            nombre,email,telefono:tel
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

                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

                <div className="Label">
                    <Button className="Button" type="submit">Crear Orden</Button>
                </div>
            </form>
            
        </div>
    )    







}

export default CheckOutForm;