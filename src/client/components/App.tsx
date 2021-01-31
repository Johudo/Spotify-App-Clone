import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./Login";
import Navbar from "./Navbar";
import Main from "./Main";

import "../styles/App.scss";
import "../styles/Button.scss";

function App(): any {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Main />
                    </Route>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
