import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { Product } from "../Component/ProductData";

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("keys");
  if (newCartData === null) {
    return {};
  } else {
    return JSON.parse(newCartData);
  }
};

const defaultCart = () => {
  const cart = getLocalCartData;
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

  useEffect(() => {
    localStorage.setItem("keys", JSON.stringify(cartItem));
  }, [cartItem]);

  const contextValue = {
    cartItem,
    addToCart,
    cartCount,
    increaseCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
