export type IsLoggedInAction = {
    type: string;
    username?: string;
};

export type IsLoggedInDispatchType = (args: IsLoggedInAction) => IsLoggedInAction;

export type IsLoggedInState = {
    isLoggedIn: boolean;
    username: string;
};
