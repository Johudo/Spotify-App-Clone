import * as actionsTypes from "./actionTypes";
import { IsLoggedInAction, IsLoggedInDispatchType } from "./type";

export function toLogIn() {
    const action: IsLoggedInAction = {
        type: actionsTypes.TO_LOG_IN,
    };

    return (dispatch: IsLoggedInDispatchType) => dispatch(action);
}

export function toLogOut() {
    const action: IsLoggedInAction = {
        type: actionsTypes.TO_LOG_OUT,
    };

    return (dispatch: IsLoggedInDispatchType) => dispatch(action);
}
