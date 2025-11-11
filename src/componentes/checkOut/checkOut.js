import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Timestamp, collection, documentId, getDocs, writeBatch,where, query, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import CheckOutForm from "./checkOutForm";
import "./checkOut.css"

const CheckOut = ()=>{
    const[cargando, setCargando] = useState(false);
    const[ordenId, setOrdenId] = useState("");

    const {cart,getTotal,clearCart} = useContext(cartContext)

    const createOrder = async({nombre,telefono,email}) =>{
        setCargando(true);
        try{
            const objectOrder = {
                comprador:{
                    nombre,telefono,email
                },
                items: cart,
                totalCompra:getTotal(),
                fecha: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOffStock = []

            const ids = cart.map(aut =>aut.id)
            const autosRef = collection(db,"Autos2")
            const autosFireStore= await getDocs(query(autosRef,where(documentId(),"in",ids)))
            const {docs} = autosFireStore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.cantidad

                const autosCart = cart.find(aut => aut.id === doc.id)
                const autoStock = autosCart?.cantidadAgregada

                if(stockDb >= autoStock){
                    batch.update(doc.ref,{cantidad: stockDb - autoStock})
                }else{
                    outOffStock.push({id:doc.id,...dataDoc})
                }            
            })

            if(outOffStock.length === 0){
                await batch.commit()

                const ordenRef = collection(db,"ordenes")
                const ordenAdd = await addDoc(ordenRef,objectOrder)
                setOrdenId(ordenAdd.id)
                clearCart()
                
            }else{
                console.log("Productos fuera de stock")
            }


        } catch(err){
            console.error(err)
        }finally{
            setCargando(false)
        }
    }

    if(cargando){
        return <h1>Se Esta Cargando La Orden...</h1>
    }
    if(ordenId){
        return <h1>Su Numero de Orden es el:{ordenId}</h1>
    }

    return(
        <div>
            <h1>CheckOut: </h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}


export default CheckOut;