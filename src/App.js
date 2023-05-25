import NavBar from "./componentes/navBar/navBar"
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./componentes/context/cartContext";
import Cart  from "./componentes/carrito/cart"
import CartWidget from "./componentes/cartWidget/cartWidget";
import CheckOut from "./componentes/checkOut/checkOut";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path="/marca/:categoriaMarca" element={<ItemListContainer titulo={"Bienvenido Usuario/a"}/>}/>
              <Route path='/' element={<ItemListContainer titulo={"Bienvenido Usuario/a"}/>}/>
              <Route path="item/:autoId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/cart" element={<CartWidget/>}/>
              <Route path="/checkOut" element={<CheckOut/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    
  ) 
}

export default App;
