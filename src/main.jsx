import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
