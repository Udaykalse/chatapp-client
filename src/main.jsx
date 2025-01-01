import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { useThemeStore } from "./store/useThemeStore.js";

// const storedTheme = localStorage.getItem("theme") || "light";
// document.documentElement.setAttribute("data-theme", storedTheme);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
