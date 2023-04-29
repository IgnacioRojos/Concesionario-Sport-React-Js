import { Autos } from './DataAutos/data.js'; 

export const getAutos= ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Autos)
        },2000)
    })
}

export const getFiltroAutos = (autoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Autos.find(aut=>aut.id ===autoId))
        },2000)
    })
}
