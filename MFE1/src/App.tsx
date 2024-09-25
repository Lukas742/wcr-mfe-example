import { ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
import { createRoot } from "react-dom/client";
import Version from "./Version";
import "./index.css";

const App = () => (
  <div className="container">
    <Version />
  </div>
);
const rootElement = document.getElementById("app");

const root = createRoot(rootElement as HTMLElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
