import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Button } from "react-bootstrap";

const Prod = (props) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, image } = props;

  return (
    <div>
      <img src={image} alt="image" />
      <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <div>
        <Button
          variant="outline-dark"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Prod;
