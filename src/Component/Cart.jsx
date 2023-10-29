import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { removeFromCart, cleanedEmail } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  const fetchCartData = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/5e34c750ed024353a27e01a1b9071d37/${cleanedEmail}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart data.");
      }

      const data = await response.json();

      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [cleanedEmail]);

  const handleRemoveFromCart = async (item) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/5e34c750ed024353a27e01a1b9071d37/${cleanedEmail}/${item._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item from the cart.");
      }

      fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
              </div>
            </div>
            <div className="remove-btn">
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
