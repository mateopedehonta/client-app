import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFoundContainer from "./Containers/NotFoundContainer";
import CartContextProvider from "./Context/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:nameCollection" element={<App />} />
          <Route path="/" element={<NotFoundContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
);
