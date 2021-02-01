import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./Login";
import Navbar from "./Navbar";
import Main from "./Main";

import "../styles/App.scss";
import "../styles/Button.scss";
import { toLogIn } from "../store/creators/isLoggedInCreator";

function App(): any {
    const dispatch = useDispatch();

    const authenticatedUsername =
        localStorage.getItem("username") || sessionStorage.getItem("username");
    if (authenticatedUsername) dispatch(toLogIn(authenticatedUsername));

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
