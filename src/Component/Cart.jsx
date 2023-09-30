import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Product } from "./ProductData";
import CartList from "./CartList";

const Cart = (props) => {
  const { cartItem } = useContext(CartContext);
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="cart-container">
      <div className="title">
        <h1>Your Cart</h1>
      </div>
      {Product.map((product, index) => {
        console.log(product.id);
        if (cartItem[product.id] !== 0) {
          return (
            <CartList
              key={index}
              id={index}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          );
        }
      })}
      <div className="cart-btn">
        <Button variant="outline-dark" onClick={props.closeCartF}>
          Cancel
        </Button>
        <Button variant="outline-dark">Order</Button>
      </div>
    </div>
  );
};

export default Cart;
