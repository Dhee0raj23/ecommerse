import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Generics from "./Component/Generics";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import CartContextProvider from "./Context/CartContextProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const openCartTrue = () => {
    setOpenCart(true);
  };
  const closeCartFalse = () => {
    setOpenCart(false);
  };

  return (
    <CartContextProvider>
      <Cart closeCartF={closeCartFalse} isOpen={openCart} />
      <NavBar cartOpen={openCartTrue} />
      <Generics />
      <ProductList />
    </CartContextProvider>
  );
}

export default App;
