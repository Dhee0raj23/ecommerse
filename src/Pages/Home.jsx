import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="homecontainer">
        <h1 className="heading"> The Generics </h1>
        <div>
          <h3 className="para">Get Our Latest Album</h3>
          <div className="icon">
            <h3>►</h3>
          </div>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "100px",
        }}
      >
        Tours
      </h1>
      <div>
        <div className="list">
          <p>july1</p>
          <div>
            <p>ksjf</p>
          </div>
          <div>
            <p>ksjlfj</p>
          </div>
          <div>
            <button className="listbutton">Buy tickit</button>
          </div>
        </div>
        <hr />
        <div className="list">
          <p>july1</p>
          <div>
            <p>ksjf</p>
          </div>
          <div>
            <p>ksjlfj</p>
          </div>
          <div>
            <button className="listbutton">Buy tickit</button>
          </div>
        </div>
        <hr />
        <div className="list">
          <p>kfs</p>
          <div>
            <p>sdfs</p>
          </div>
          <div>
            <p>dfsfdsf</p>
          </div>
          <div>
            <button className="listbutton">Buy tickit</button>
          </div>
        </div>
        <hr />
        <div className="list">
          <p>fgh</p>
          <div>
            <p>dmkd</p>
          </div>
          <div>
            <p>swrgrg</p>
          </div>
          <div>
            <button className="listbutton">Buy tickit</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
