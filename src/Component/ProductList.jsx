import React from "react";
import { Product } from "./ProductData";
import Prod from "./Prod";

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        {Product.map((product, index) => (
          <div className="col-md-6 d-flex justify-content-center" key={index}>
            <Prod
              id={index}
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
