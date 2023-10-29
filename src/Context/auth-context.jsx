import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const [userEmail, setUserEmail] = useState("");

  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem("token", token);
    setUserEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token,
    userEmail,
    userIsLoggedIn,
    loginHandler,
    logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
