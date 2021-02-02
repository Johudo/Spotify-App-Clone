import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../views/LoginView";
import Main from "../views/MainView";

import "./App.scss";
import "../blocks/Button/Button.scss";
import { toLogIn } from "../../store/creators/isLoggedInCreator";

export function App(): any {
    const dispatch = useDispatch();

    const authenticatedUsername =
        localStorage.getItem("username") || sessionStorage.getItem("username");
    if (authenticatedUsername) dispatch(toLogIn(authenticatedUsername));

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route>
                        <Main />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
