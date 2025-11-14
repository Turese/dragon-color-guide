import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DragonStateProvider } from "./dragonCtx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { readColorGuideParameters } from "./helpers/scryLink";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const urlParams = new URLSearchParams(window.location.search);
const defaultValues = readColorGuideParameters(urlParams);

root.render(
  <React.StrictMode>
    <DragonStateProvider defaults={defaultValues}>
      <div className="app-container">
        <MantineProvider defaultColorScheme="light">
          <App />
        </MantineProvider>
      </div>
    </DragonStateProvider>
  </React.StrictMode>,
);
