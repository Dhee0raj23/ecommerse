import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import { Product } from "../Component/ProductData";

const CART_STORAGE_KEY = "cartData";
const defaultCart = () => {
  const cart = {};
  for (let i = 0; i < Product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(() => {
    const storedCartData = localStorage.getItem(CART_STORAGE_KEY);
    return storedCartData ? JSON.parse(storedCartData) : defaultCart();
  });
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCartCount((prev) => prev - 1);
  };

  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItem));
  }, [cartItem]);

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    cartCount,
    increaseCount,
    decreaseCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
