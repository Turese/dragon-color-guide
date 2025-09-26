import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DragonStateProvider } from "./dragonCtx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <DragonStateProvider>
      <div className="app-container">
        <MantineProvider defaultColorScheme="light">
          <App />
        </MantineProvider>
      </div>
    </DragonStateProvider>
  </React.StrictMode>,
);
