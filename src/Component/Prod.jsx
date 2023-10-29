import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const Prod = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handelAddtoCart = () => {
    addToCart(product);
  };
  return (
    <div>
      <Link to={`/store/${product.id}`}>
        <img src={product.imageUrl} alt="songs" />
        <div>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
        </div>
      </Link>
      <div>
        <Button variant="outline-dark" onClick={handelAddtoCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Prod;
