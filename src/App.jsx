import "./index.css";
import { Route, Routes, useLocation } from "react-router";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import Start from "./pages/Start.jsx";
import Meta from "./pages/Meta.jsx";

export default function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/meta" element={<Meta />} />
    </Routes>
  );
}
