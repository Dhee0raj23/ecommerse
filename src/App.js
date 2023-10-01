import React from "react";
import CartContextProvider from "./Context/CartContextProvider";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
