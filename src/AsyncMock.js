
export const getAutos = () =>{
    setTimeout(()=>{
        fetch("./data.json")
            .then((respuesta)=>{
                console.log(respuesta)
                return respuesta.json()
            })
            .then((myJson)=>{
             console.log(myJson)
            })
        
    },2000)
    
        
    
}











