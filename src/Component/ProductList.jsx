import { Row, Col } from "react-bootstrap";
import { Product } from "./ProductData";
import Prod from "./Prod";

const ProductList = () => {
  return (
    <div>
      <Row>
        {Product.map((product, index) => (
          <Col key={index} md="5" style={{ margin: "10px" }}>
            <Prod
              id={index}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
