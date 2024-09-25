// import "@ui5/webcomponents-react/styles.css";
import {
  FlexBox,
  FlexBoxDirection, SplitterElement, SplitterLayout,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";

function UI5WCRComponents() {
  // debugger;
  console.log("mfe2");
  return (
    // <ThemeProvider staticCssInjected>
    <ThemeProvider>
      <FlexBox direction={FlexBoxDirection.Column}>
        <button>Should</button>
        <button>Have</button>
        <button>Column</button>
        <button>Layout</button>
      </FlexBox>
      <SplitterLayout style={{ height: "200px" }}>
        <SplitterElement>Some content</SplitterElement>
        <SplitterElement>Some content</SplitterElement>
        <SplitterElement>Some content</SplitterElement>
      </SplitterLayout>
    </ThemeProvider>
  );
}

export default UI5WCRComponents;
