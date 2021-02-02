import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../HomeView";
import Playlist from "../PlaylistView";
import Navbar from "../../blocks/Navbar";

export function MainView(props: any) {
    return (
        <React.Fragment>
            <Navbar />
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
        </React.Fragment>
    );
}
