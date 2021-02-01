import * as actionsTypes from "../actions/isLoggedInActions";
import { IsLoggedInAction, IsLoggedInState } from "../types/isLoggedInTypes";

const initialState: IsLoggedInState = {
    isLoggedIn: false,
    username: "",
};

const reducer = (
    state: IsLoggedInState = initialState,
    action: IsLoggedInAction
): IsLoggedInState => {
    switch (action.type) {
        case actionsTypes.TO_LOG_IN:
            state = {
                isLoggedIn: true,
                username: action.username,
            };
            break;

        case actionsTypes.TO_LOG_OUT:
            state = {
                isLoggedIn: false,
                username: "",
            };
            break;
    }

    return state;
};

export default reducer;
