// @flow
import React from "react";
import { square } from "./utils";

const App = (): React$Element<"div"> => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>
      <span
        style={{
          color: "#61dbfb",
          backgroundColor: "#242424",
          padding: "0 15px",
        }}
      >
        React + Flow
      </span>
    </h1>
    <pre>
      <code>square(2) = {square(2) * 1}</code>
    </pre>
  </div>
);

export default App;
