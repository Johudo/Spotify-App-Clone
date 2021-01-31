import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function Main(props: any) {
    return (
        <main className="main">
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </main>
    );
}

export default Main;
