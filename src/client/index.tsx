import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import App from "./components/App";
import IsLoggedInReducer from "./store/IsLoggedIn/reducer";

import "./index.scss";

// const rootReducer = combineReducers(IsLoggedInReducer);

const store = createStore(IsLoggedInReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
