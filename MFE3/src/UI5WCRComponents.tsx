// import "@ui5/webcomponents-react/styles.css";
import {
  FlexBox,
  FlexBoxDirection,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  console.log("mfe3");
  return (
    // <ThemeProvider staticCssInjected>
    <ThemeProvider>
      <FlexBox direction={FlexBoxDirection.Column}>
        <button>Should</button>
        <button>Have</button>
        <button>Column</button>
        <button>Layout</button>
      </FlexBox>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
