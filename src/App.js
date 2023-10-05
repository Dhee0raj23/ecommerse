import React from "react";
import RootLayout from "./Pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartContextProvider from "./Context/CartContextProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cart from "./Component/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />;
    </CartContextProvider>
  );
}

export default App;
