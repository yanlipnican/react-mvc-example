import React from "react";
import HeaderContainer from "./header";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Explorer from "./explorer";
import { Router as ReactRouter } from "react-router";
import { History } from "history";
import { connect } from "../lib/connectComponent";
import { ReactRouterController, ROUTER_CONTROLLER } from "../modules/router";
import { IApplicationContext } from "../lib/applicationContext";

export interface IRouterContextProps {
    history: History;
}

type IRouterProps = IRouterContextProps;

const Router: React.FC<IRouterProps> = ({ history }) => {
    return (
        <ReactRouter history={history}>
            <HeaderContainer />
            <div style={{ height: "calc(100vh - 70px)", overflow: "hidden" }}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/explorer" />
                    </Route>
                    <Route path="/explorer">
                        <Explorer />
                    </Route>
                    <Route path="*">
                        <div>
                            <h1>Not found</h1>
                            <Link to="/">Go back</Link>
                        </div>
                    </Route>
                </Switch>
            </div>
        </ReactRouter>
    );
};

const mapContextToProps = ({ container }: IApplicationContext) => ({
    history: container.get<ReactRouterController>(ROUTER_CONTROLLER).getBrowserHistory(),
});

export default connect(Router, mapContextToProps);
