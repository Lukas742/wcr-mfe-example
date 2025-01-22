import "./scoping.ts";
console.log("import mfe1 wc comp");
import { Button, Modals, ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  return (
    <ThemeProvider>
      {/*<Modals />*/}
      <Button
        onClick={() => {
          Modals.showToast({ duration: 123456789, children: "Modal - MFE1" });
        }}
      >
        Show Modal (v2 - mfe1)
      </Button>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
