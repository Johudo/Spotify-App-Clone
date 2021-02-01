import React from "react";
import { useSelector } from "react-redux";
import LogInHeader from "./LoginHeader";
import { IsLoggedInState } from "../../store/types/isLoggedInTypes";

import "../../styles/Header.scss";

function Header(props: HeaderProps) {
    const isLoggedInState: IsLoggedInState = useSelector(
        (state: IsLoggedInState) => state
    );

    if (isLoggedInState.isLoggedIn) return <props.type />;
    else return <LogInHeader />;
}

type HeaderProps = {
    type: (props: any) => JSX.Element;
};

export default Header;
