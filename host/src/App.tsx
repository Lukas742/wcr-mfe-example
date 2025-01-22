import "./scoping.ts";
// import "@ui5/webcomponents-react/styles.css";
import {
  Button,
  FlexBox,
  FlexBoxDirection,
  Modals,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Version from "./Version";
import { I18nProvider } from "v1wcr/dist/internal/I18nProvider";

const MFE1_Version = React.lazy(() => import("MFE1/Version"));
const MFE2_Version = React.lazy(() => import("MFE2/Version"));
const MFE3_Version = React.lazy(() => import("MFE3/Version"));
const MFE4_Version = React.lazy(() => import("MFE4/Version"));
// const MFE5_Version = React.lazy(() => import("MFE5/Version"));

const MFE1_UI5WCR = React.lazy(() => import("MFE1/UI5WCRComponents"));
const MFE2_UI5WCR = React.lazy(() => import("MFE2/UI5WCRComponents"));
const MFE3_UI5WCR = React.lazy(() => import("MFE3/UI5WCRComponents"));
const MFE4_UI5WCR = React.lazy(() => import("MFE4/UI5WCRComponents"));
// const MFE5_UI5WCR = React.lazy(() => import("MFE5/UI5WCRComponents"));

const App = () => {
  const [mfe1, toggleMFE1] = useReducer((prev) => !prev, true);
  const [mfe2, toggleMFE2] = useReducer((prev) => !prev, true);
  const [mfe3, toggleMFE3] = useReducer((prev) => !prev, true);
  const [mfe4, toggleMFE4] = useReducer((prev) => !prev, true);
  // const [mfe5, toggleMFE5] = useReducer((prev) => !prev, false);
  return (
    <I18nProvider>
      <Version />
      <FlexBox direction={FlexBoxDirection.Column}>
        <Button onClick={toggleMFE1}>Toggle MFE1</Button>
        <Button onClick={toggleMFE2}>Toggle MFE2</Button>
        <Button onClick={toggleMFE3}>Toggle MFE3</Button>
        <Button onClick={toggleMFE4}>Toggle MFE4</Button>
        {/*<Button onClick={toggleMFE5}>Toggle MFE5</Button>*/}
      </FlexBox>
      <Button
        onClick={() => {
          Modals.showToast({ duration: 123456789, children: "Modal - Host" });
        }}
      >
        Show Modal (v2 - host)
      </Button>
      <hr />
      {mfe1 && (
        <React.Suspense fallback="Loading...">
          <MFE1_Version />
          <MFE1_UI5WCR />
        </React.Suspense>
      )}
      <hr />
      {mfe2 && (
        <React.Suspense fallback="Loading...">
          <MFE2_Version />
          <MFE2_UI5WCR />
        </React.Suspense>
      )}
      <hr />
      {mfe3 && (
        <React.Suspense fallback="Loading...">
          <MFE3_Version />
          <MFE3_UI5WCR />
        </React.Suspense>
      )}
      {mfe4 && (
        <React.Suspense fallback="Loading...">
          <MFE4_Version />
          <MFE4_UI5WCR />
        </React.Suspense>
      )}
      {/*{mfe5 && (*/}
      {/*  <React.Suspense fallback="Loading...">*/}
      {/*    <MFE5_Version />*/}
      {/*    <MFE5_UI5WCR />*/}
      {/*  </React.Suspense>*/}
      {/*)}*/}
    </I18nProvider>
  );
};
const rootElement = document.getElementById("app");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ThemeProvider>
    <Modals />
    <App />
  </ThemeProvider>,
);
