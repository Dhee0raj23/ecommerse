const CartList = (props) => {
  const { id, title, price, image } = props;
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
      <img src={image} alt="image" style={{ width: "100px" }} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h2>{price}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <button>ADD</button>
        </div>
        <div>
          <input type="text" style={{ width: "40px" }} />
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
