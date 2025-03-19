import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login.jsx";
//import Cadastro from './pages/Cadastro.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
