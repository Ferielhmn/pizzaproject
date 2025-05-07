import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import PizzaList from "./components/PizzaList";
import Product from "./pages/product/id"; // ne mets pas ".jsx"
//import id from "C:/wamp64/www/pizzaapp/src/pages/product/id.jsx";
import Ido from "C:/wamp64/www/pizzaapp/src/pages/orders/Ido.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import data from "C:/wamp64/www/pizzaapp/src/data/data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Initialisation du localStorage
  useEffect(() => {
    const alreadySet = localStorage.getItem("products");
    if (!alreadySet) {
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, []);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Featured />
              <PizzaList />
            </>
          }
        />
        <Route
          exact
          path="/pizza/:id"
          element={<Product addToCart={addToCart} />}
        />
        <Route path="/orders/:id" element={<Ido />} />
        <Route path="/cart" element={<Cart cart={cartItems} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
