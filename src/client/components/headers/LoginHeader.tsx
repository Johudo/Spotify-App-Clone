import React from "react";
import { Link } from "react-router-dom";

import "../../styles/LoginHeader.scss";

function LoginHeader() {
    return (
        <div className="login-header header">
            <Link to="/register" className="button transparent-button">
                Зарегистрироваться
            </Link>
            <Link to="/login" className="button white-button">
                Войти
            </Link>
        </div>
    );
}

export default LoginHeader;
