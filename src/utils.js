import {db} from './firebase';
import { collection, getDocs, where, query} from 'firebase/firestore';

export const getAutos = async () => {
    try {
        const coleccionAutos = collection(db, "Autos2");
        const respuesta = await getDocs(coleccionAutos);
        return respuesta.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (err) {
        console.error("Error en getAutos:", err);
        throw err;
    }
};

export const getAutosPorCategoria = async (categoriaMarca) => {
    try {
        const coleccionAutos = collection(db, "Autos2");
        const filtro = query(coleccionAutos, where("marca", "==", categoriaMarca));
        const respuesta = await getDocs(filtro);
        return respuesta.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (err) {
        console.error("Error en getAutosPorCategoria:", err);
        throw err;
    }
};



