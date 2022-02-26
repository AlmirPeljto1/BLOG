//IMPORT
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
//APP RENDER COVERED WITH CONTEXT
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
