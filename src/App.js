import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Generics from "./Component/Generics";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
function App() {
  const [openCart, setOpenCart] = useState(false);
  const openCartTrue = () => {
    setOpenCart(true);
  };
  const closeCartFalse = () => {
    setOpenCart(false);
  };

  return (
    <>
      <Cart closeCartF={closeCartFalse} isOpen={openCart} />
      <NavBar cartOpen={openCartTrue} />
      <Generics />
      <ProductList />
    </>
  );
}

export default App;
