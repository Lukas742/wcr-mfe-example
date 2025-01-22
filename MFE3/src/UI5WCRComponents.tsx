// import "@ui5/webcomponents-react/styles.css";
import "./scoping.ts";
import {
  Button,
  FlexBox,
  FlexBoxDirection,
  Modals,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  // const showToast = Modals.useShowDialog();
  return (
    // <ThemeProvider staticCssInjected>
    <ThemeProvider>
      <Button
        onClick={() => {
          Modals.showToast({ duration: 123456789, children: "Modal - MFE3" });
        }}
      >
        Show Modal (v1 - mfe3)
      </Button>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
