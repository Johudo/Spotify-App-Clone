import React from "react";
import { Link } from "react-router-dom";

import "./UnauthorizedHeader.scss";

export function UnauthorizedHeader() {
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
