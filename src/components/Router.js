import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Confirmation from "./Confirmation";
import Terms from "./Terms";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/terms" component={Terms} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>
);


export default Router;