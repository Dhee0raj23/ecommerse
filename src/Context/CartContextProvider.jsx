import CartContext from "./CartContext";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./auth-context";

const CartContextProvider = (props) => {
  const { userEmail } = useContext(AuthContext);
  const cleanedEmail = userEmail.replace(/[@.]/g, "");

  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/5e34c750ed024353a27e01a1b9071d37/${cleanedEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cartContextValue = {
    cart,
    addToCart,
    cleanedEmail,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
