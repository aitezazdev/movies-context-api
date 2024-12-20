import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MoviesContext from "./Context/MoviesContext.jsx";

createRoot(document.getElementById("root")).render(
  <MoviesContext>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </MoviesContext>
);
