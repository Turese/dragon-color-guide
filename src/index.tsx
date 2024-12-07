import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DragonStateProvider } from "./dragonCtx";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <DragonStateProvider>
      <div className="app-container">
        <App />
      </div>
    </DragonStateProvider>
  </React.StrictMode>,
);
