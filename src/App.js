/*Importaciones*/
import NavBar from "./componentes/navBar/navBar"
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";



/*Funcion principal con el navBar,ItemListContainer donde enruté para que se muestre los autos por marca o vuelva al catalogo completo, por
ultimo en cada tarjeta de los autos tiene un link hacia el detalle del auto*/



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/marca/:categoriaMarca" element={<ItemListContainer titulo={"Bienvenido Usuario/a"}/>}/>
          <Route path='/' element={<ItemListContainer titulo={"Bienvenido Usuario/a"}/>}/>
          <Route path="item/:autoId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  ) 
}

export default App;
