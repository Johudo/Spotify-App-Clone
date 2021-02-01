import * as actionsTypes from "../actions/isLoggedInActions";
import { IsLoggedInAction } from "../types/isLoggedInTypes";

const initialState: boolean = false;

const reducer = (state: boolean = initialState, action: IsLoggedInAction): boolean => {
    switch (action.type) {
        case actionsTypes.TO_LOG_IN:
            state = true;
            break;
        case actionsTypes.TO_LOG_OUT:
            state = false;
            break;
    }

    return state;
};

export default reducer;
