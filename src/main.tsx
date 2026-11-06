import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import SuggestProductForm from "./components/SuggestProductForm";
import { AppProvider } from "./context/AppContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/suggest" element={<SuggestProductForm />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);