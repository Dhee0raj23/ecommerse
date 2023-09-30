import React, { useState } from "react";
import CartContext from "./CartContext";
import { Product } from "../Component/ProductData";

const defaultCart = () => {
  const cart = {};
  for (let i = 0; i < Product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(defaultCart());
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount((prev) => prev + 1);
  };

  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const contextValue = {
    cartItem,
    addToCart,
    cartCount,
    increaseCount,
  };
  console.log(cartItem);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
