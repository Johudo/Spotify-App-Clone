import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";

function Home(props: any) {
    return (
        <Router history={props.history}>
            <Navbar />
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    );
}

export default Home;
