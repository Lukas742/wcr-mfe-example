import {
  FlexBox,
  FlexBoxDirection,
  SplitterElement,
  SplitterLayout,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  console.log("mfe1");
  return (
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
