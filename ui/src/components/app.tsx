import { hot } from "react-hot-loader";
import React from "react";
import { ApplicationContainerProvider } from "../lib/applicationContext";
import Router from "./router";

const App: React.FC = () => {
    return (
        <ApplicationContainerProvider>
            <Router />
        </ApplicationContainerProvider>
    );
};

export default hot(module)(App);
