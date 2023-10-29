import React from "react";
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
            <Prod product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
