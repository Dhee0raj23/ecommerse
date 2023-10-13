import "./Login.css";
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1 style={{ color: "rgba(0,0,225)" }}>LOGIN</h1>
        <input
          type="email"
          placeholder="Email"
          className="loginInput"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          required
        />
        <div className="loginButton">
          <button className="loginBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
