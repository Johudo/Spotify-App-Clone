import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Playlist from "./Playlist";

function Main(props: any) {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test" component={Playlist} />
                <Route
                    exact
                    path="/playlist/:id"
                    render={(props: any) => <Playlist {...props} />}
                />
            </Switch>
        </main>
    );
}

export default Main;
