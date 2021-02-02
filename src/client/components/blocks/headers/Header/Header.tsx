import React from "react";
import { useSelector } from "react-redux";
import UnauthorizedHeader from "../UnauthorizedHeader";
import { IsLoggedInState } from "../../../../store/types/isLoggedInTypes";

import "./Header.scss";

export function Header(props: HeaderProps) {
    const isLoggedInState: IsLoggedInState = useSelector(
        (state: IsLoggedInState) => state
    );

    if (isLoggedInState.isLoggedIn) return <props.type />;
    else return <UnauthorizedHeader />;
}

type HeaderProps = {
    type: (props: any) => JSX.Element;
};
