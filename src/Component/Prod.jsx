import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Prod = (props) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, image } = props;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div>
      <Link to={`/store/${id}`}>
        <img src={image} alt="songs" />
        <div>
          <h2>{title}</h2>
          <h2>{price}</h2>
        </div>
      </Link>
      <div>
        <Button variant="outline-dark" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Prod;
