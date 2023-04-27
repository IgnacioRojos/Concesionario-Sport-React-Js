/*Importaciones*/
import { useEffect } from "react";
import NavBar from "./componentes/navBar/navBar"
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/itemCount/itemCount";


/*Funcion principal con el navBar y el ItemList*/



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo={"Bienvenido Usuario"}/>
      <ItemCount inicial= {1} stock = {10} />


    </div>
  );
}

export default App;
