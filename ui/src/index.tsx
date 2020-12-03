import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./styles/main.scss";
import { configure as mobxConfigure } from "mobx";

mobxConfigure({ enforceActions: "observed" });

ReactDOM.render(<App />, document.getElementById("react-root"));
