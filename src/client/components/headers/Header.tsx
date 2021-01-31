import React from "react";
import { useSelector } from "react-redux";
import LogInHeader from "./LoginHeader";

import "../../styles/Header.scss";

function Header(props: HeaderProps) {
    const isLoggedIn: boolean = useSelector((state: boolean) => state);

    if (isLoggedIn) return <props.type />;
    else return <LogInHeader />;
}

type HeaderProps = {
    type: (props: any) => JSX.Element;
};

export default Header;
