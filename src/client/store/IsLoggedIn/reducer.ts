import * as actionsTypes from "./actionTypes";
import { IsLoggedInAction } from "./type";

const initialState: boolean = false;

const reducer = (state: boolean = initialState, action: IsLoggedInAction): boolean => {
    switch (action.type) {
        case actionsTypes.TO_LOG_IN:
            state = true;
        case actionsTypes.TO_LOG_OUT:
            state = false;
    }

    return state;
};

export default reducer;
