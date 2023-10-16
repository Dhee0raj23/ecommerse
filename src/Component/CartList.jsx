import { Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const CartList = (props) => {
  const { cartItem, addToCart, removeFromCart, decreaseCount, increaseCount } =
    useContext(CartContext);
  const { id, title, price, image } = props;

  const removeButtonHandler = () => {
    removeFromCart(id);
    decreaseCount();
  };
  const addButtonHandler = () => {
    addToCart();
    increaseCount();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid black",
        width: "50%",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <img src={image} alt="songs" style={{ width: "100px" }} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h2>{price}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h3>{`quantity ${cartItem[id]}`}</h3>
          <Button
            variant="outline-dark"
            style={{ width: "80px" }}
            onClick={removeButtonHandler}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
