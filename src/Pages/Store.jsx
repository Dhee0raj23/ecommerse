import React, { useState } from "react";
import Cart from "../Component/Cart";
import Generics from "../Component/Generics";
import ProductList from "../Component/ProductList";

const Store = () => {
  const [openCart, setOpenCart] = useState(false);
  const openCartTrue = () => {
    setOpenCart(true);
  };
  const closeCartFalse = () => {
    setOpenCart(false);
  };
  return (
    <div>
      <Cart closeCartF={closeCartFalse} isOpen={openCart} />
      <Generics />
      <ProductList />
    </div>
  );
};

export default Store;
