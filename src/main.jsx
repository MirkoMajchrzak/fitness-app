import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dash from "./App/dash";
import Nav from "./components/navbar";

ReactDOM.render(
  <React.StrictMode>
    <Dash />
    <Nav />
  </React.StrictMode>,
  document.getElementById("root")
);
