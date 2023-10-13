import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "./ProductData";
import "./ProductDetail.css";
import { Button } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();

  const product = Product.find((product) => product.id === parseInt(id));

  return (
    <div className="detail-container">
      <div className="detail-img">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="descri">
        <h2>{product.title}</h2>
        <h1>Price: {product.price}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
          doloribus! Quisquam perspiciatis eum numquam optio ea blanditiis
          tempore magni architecto vel dicta repudiandae fugit quod, maxime iure
          expedita? Neque aut aliquam quod sint ipsum inventore libero enim
          suscipit, earum blanditiis nulla delectus qui reiciendis recusandae,
          dolore asperiores optio amet, nesciunt voluptates at! Explicabo natus
          omnis repellat velit ducimus esse amet minima culpa eius, eaque unde,
          molestias pariatur autem quod non veritatis ad? Quis, reprehenderit
          facilis. Tempora cum laboriosam, maiores nobis dolorum officiis
          aperiam deserunt quo? Eligendi, aut deserunt? Et soluta culpa sunt
          asperiores voluptates sequi ea, qui veritatis delectus ad?
        </p>
        <div>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
