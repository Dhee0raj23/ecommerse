import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./ProductData";
import Prod from "./Prod";

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        {Product.map((product) => (
          <div
            className="col-md-6 d-flex justify-content-center"
            key={product.id}
          >
            <Prod
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
