import { Button } from "react-bootstrap";
import "./Cart.css";
import { Product } from "./ProductData";
import CartList from "./CartList";

const Cart = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="cart-container">
      <div className="title">
        <h1>Your Cart</h1>
      </div>
      {Product.map((products, index) => (
        <CartList
          id={index}
          title={products.title}
          price={products.price}
          image={products.imageUrl}
        />
      ))}
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
