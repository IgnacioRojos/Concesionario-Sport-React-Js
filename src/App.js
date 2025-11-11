import { useState } from "react";
import NavBar from "./componentes/navBar/navBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./componentes/context/cartContext";
import Cart from "./componentes/carrito/cart";
import CartWidget from "./componentes/cartWidget/cartWidget";
import CheckOut from "./componentes/checkOut/checkOut";
import WelcomeScreen from "./componentes/Bienvenida/welcomeScreen";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen onFinish={() => setShowWelcome(false)} />
      ) : (
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/marca/:categoriaMarca"
                element={<ItemListContainer titulo={"Bienvenido Usuario/a"} />}
              />
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenido Usuario/a"} />}
              />
              <Route path="item/:autoId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cartWidget" element={<CartWidget />} />
              <Route path="/checkOut" element={<CheckOut />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;