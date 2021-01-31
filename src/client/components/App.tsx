import * as React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "./Navbar";
import Home from "./Home";
import LogIn from "./LogIn";

import "../styles/App.scss";

function App(): any {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/login" component={LogIn} />
                    {/* <Route path="/register" component={Home} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
