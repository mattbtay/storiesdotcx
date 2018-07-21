import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Confirmation from "./Confirmation";

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/confirmation" component={Confirmation} />
            <Route component={App} />
        </Switch>
    </HashRouter>
);


export default Router;