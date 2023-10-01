import React from "react";
import CartContextProvider from "./Context/CartContextProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
