/*Importaciones*/

import NavBar from "./componentes/navBar/navBar"
import './App.css';
import ItemList from "./componentes/ItemListContainer/ItemListContainer";

/*Funcion principal con el navBar y el ItemList*/

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList titulo={"Bienvenido Usuario"}/>
    </div>
  );
}

export default App;
