import React, { useContext } from "react";
import CartContextProvider from "./Context/CartContextProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";
import ContactUs from "./Pages/Contact";
import ProductDetail from "./Component/ProductDetail";
import Layout from "./Component/Layout";
import Login from "./Pages/Login";
import { AuthContext } from "./Context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <CartContextProvider>
      <Layout>
        <Switch>
          {authCtx.userIsLoggedIn && (
            <Route path="/store/:id">
              <ProductDetail />
            </Route>
          )}
          {authCtx.userIsLoggedIn && (
            <Route path="/store" exact>
              <Store />
            </Route>
          )}

          {authCtx.userIsLoggedIn && (
            <Route path="/about">
              <About />
            </Route>
          )}

          {authCtx.userIsLoggedIn && (
            <Route path="/home">
              <Home />
            </Route>
          )}
          {authCtx.userIsLoggedIn && (
            <Route path="/cart">
              <Cart />
            </Route>
          )}

          {authCtx.userIsLoggedIn && (
            <Route path="/contactUs">
              <ContactUs />
            </Route>
          )}

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
