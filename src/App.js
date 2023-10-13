import React from "react";
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

function App() {
  return (
    <CartContextProvider>
      <Layout>
        <Switch>
          <Route path="/store/:id">
            <ProductDetail />
          </Route>

          <Route path="/store" exact>
            <Store />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/contactUs">
            <ContactUs />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
