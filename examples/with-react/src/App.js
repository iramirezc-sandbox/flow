// @flow
import React from "react";
import { square } from "./utils";

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
  title: {
    color: "#61dbfb",
    backgroundColor: "#242424",
    padding: "0 15px",
  },
};

const App = (): React$Element<"div"> => (
  <div style={styles.container}>
    <h1>
      <span style={styles.title}>React + Flow</span>
    </h1>
    <pre>
      <code>square(2) = {square(2) * 1}</code>
    </pre>
  </div>
);

export default App;
