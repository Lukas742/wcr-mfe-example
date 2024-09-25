import React from "react";
import { createRoot } from "react-dom/client";
import UI5WCRComponents from "./UI5WCRComponents";
import Version from "./Version";
import "./index.css";
// import "@ui5/webcomponents-react/styles.css";

const App = () => (
  <div>
    <div>Name: MFE5</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Version />
    <UI5WCRComponents />
  </div>
);
const rootElement = document.getElementById("app");

const root = createRoot(rootElement as HTMLElement);

root.render(<App />);
