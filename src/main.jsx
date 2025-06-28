import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './App.css'
import AppRouter from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>
);
