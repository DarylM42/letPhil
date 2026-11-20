import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import SuggestProductForm from "./components/SuggestProductForm";
import { AppProvider } from "./context/AppContext";
import ProductDetailPage from "./pages/ProductDetailPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/suggest" element={<SuggestProductForm />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);