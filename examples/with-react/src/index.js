import React from "react";
// TODO: Flow complains with "Cannot resolve module `react-dom/client`".
// Installing flow-typed does not help either, as there are no
// type definitions for version 18 yet.
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
