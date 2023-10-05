import React from "react";
import NavBar from "./Component/NavBar";
import CartContextProvider from "./Context/CartContextProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import ContactUs from "./Pages/Contact";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
