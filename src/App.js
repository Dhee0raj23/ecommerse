import React from "react";
import NavBar from "./Component/NavBar";
import CartContextProvider from "./Context/CartContextProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
