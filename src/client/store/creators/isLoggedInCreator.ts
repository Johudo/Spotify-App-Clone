import * as actionsTypes from "../actions/isLoggedInActions";
import { IsLoggedInAction, IsLoggedInDispatchType } from "../types/isLoggedInTypes";

export function toLogIn(username: string) {
    const action: IsLoggedInAction = {
        type: actionsTypes.TO_LOG_IN,
        username: username,
    };

    return (dispatch: IsLoggedInDispatchType) => dispatch(action);
}

export function toLogOut() {
    const action: IsLoggedInAction = {
        type: actionsTypes.TO_LOG_OUT,
    };

    return (dispatch: IsLoggedInDispatchType) => dispatch(action);
}
