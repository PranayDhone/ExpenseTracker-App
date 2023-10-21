import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
