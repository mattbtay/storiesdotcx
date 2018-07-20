import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Confirmation from "./Confirmation";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>
);


export default Router;