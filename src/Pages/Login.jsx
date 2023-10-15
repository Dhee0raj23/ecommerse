import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../Context/auth-context";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Spinner from "../UI/Spinner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const switchAuthModeHandler = () => {
    setIsLogin((perv) => !perv);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7p9R5c9QRxcdlG9TKWs7zePwXzEF9GOg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7p9R5c9QRxcdlG9TKWs7zePwXzEF9GOg";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "AUTH FAILED";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.loginHandler(data.idToken);
        history.replace("/home");
      })
      .catch((err) => {
        alert(err.errorMessage);
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1 style={{ color: "rgba(0,0,225)" }}>
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input type="text" placeholder="name" className="loginInput" />
        )}
        <input
          type="email"
          placeholder="Email"
          className="loginInput"
          required
          ref={emailInputRef}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          required
          ref={passwordInputRef}
        />
        <div className="loginButton">
          <button className="loginBtn" onClick={submitHandler}>
            {!isLoading ? "Login" : <Spinner></Spinner>}
          </button>
        </div>

        <div className="toggleContainer">
          <button onClick={switchAuthModeHandler} className="toggle">
            {isLogin ? "Create new account" : "Login With existing account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
