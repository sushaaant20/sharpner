import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import CartProvider from "./store/CartProvider";
import AuthContext, { AuthContextProvider } from "./store/auth-contex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthContextProvider>
);
