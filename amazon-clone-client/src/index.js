/*    index.js    */

// Setup.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

// Styles.
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
