/*importaciones del archivo dataAutos que tiene un array de objetos*/
import { Autos } from './componentes/DataAutos/data.js'; 


/*Funcion 1: esta funcion se exporta a itemListContainer para mostrar todos los autos del array con una demora de 2 segundos
Funcion 2: esta funcion se exporta a itemDetailContainer pora mostrar un solo auto segun el id que tenga ese auto(esta funcion se ejecuta cuando preciono el boton ver detalle del auto)
Funcion 3: esta funcion se exporta a itemListContainer para mostrar autos de una marca en particular*/

/*export const getAutos= ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Autos)
        },2000)
    })
}*/

/*export const getFiltroAutos = (autoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Autos.find(aut=>aut.id ===parseInt(autoId)))
        },2000)
    })
}*/

/*export const getCategoriaAutos = (autoMarca)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Autos.filter(aut => aut.marca === autoMarca))
        },2000)
    })
}*/

