// import "@ui5/webcomponents-react/styles.css";
import { Button, Modals, ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
// import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
// setCustomElementsScopingSuffix("mfe4");

function UI5WCRComponents() {
  console.log("mfe4");
  return (
    <ThemeProvider>
      <Button
        onClick={() => {
          Modals.showToast({duration: 123456789, children: "Modal - MFE4" });
        }}
      >
        Show Modal (v1 - mfe4)
      </Button>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
