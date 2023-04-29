/*Importaciones*/
import NavBar from "./componentes/navBar/navBar"
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";



/*Funcion principal con el navBar y el ItemList*/



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer titulo={"Bienvenido Usuario/a"}/>
        <Routes>
          <Route path="item/:autoId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  ) 
}

export default App;
