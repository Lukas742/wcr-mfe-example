import "./scoping.ts";
// import "@ui5/webcomponents-react/styles.css";
import {
  FlexBox,
  FlexBoxDirection,
  SplitterElement,
  SplitterLayout,
  Modals,
  ThemeProvider,
  Button,
} from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  return (
    // <ThemeProvider staticCssInjected>
    <ThemeProvider>
      <div id="container1" />
      <Button
        onClick={() => {
          Modals.showToast(
            { duration: 123456789, children: "Modal - MFE2" },
            document.getElementById("container1"),
          );
        }}
      >
        Show Modal (v1 - mfe2)
      </Button>
      <Button
        onClick={() => {
          Modals.showDialog({ children: "Modal2 - MFE2" });
        }}
      >
        Show Modal2 (v1 - mfe2)
      </Button>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
