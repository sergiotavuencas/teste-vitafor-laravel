import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "./context/AppContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
