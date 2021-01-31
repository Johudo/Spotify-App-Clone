export type IsLoggedInAction = {
    type: string;
};

export type IsLoggedInDispatchType = (args: IsLoggedInAction) => IsLoggedInAction;
