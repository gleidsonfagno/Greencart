import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrouserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrouserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrouserRouter>
);
