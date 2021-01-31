import * as React from "react";
import axios, { AxiosResponse } from "axios";
import md5 from "md5";

import InputBlock from "./InputBlock";
import SpotifyLogo from "../svg/logo.svg";
import { API_URL } from "../config";

import "../styles/Login.scss";

function Login() {
    const [usernameState, setUsernameState] = React.useState("");
    const [passwordState, setPasswordState] = React.useState("");

    const onClickSubmitButton = (event: React.MouseEvent): void => {
        event.preventDefault();

        axios
            .get(API_URL + "/password", {
                params: {
                    username: usernameState,
                    password: md5(passwordState),
                },
            })
            .then((res: AxiosResponse) => {
                console.log(res.data);
                alert("success");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <div className="login-window">
            <header className="login-header">
                <a href="/" className="login-header__logo">
                    <SpotifyLogo />
                </a>
            </header>

            <form className="login-form">
                <h1 className="login-form__title">
                    Чтобы продолжить, войдите в Spotify.
                </h1>

                <InputBlock
                    label="Имя пользователя"
                    id="username"
                    onChange={setUsernameState}
                />
                <InputBlock
                    label="Пароль"
                    type="password"
                    id="password"
                    onChange={setPasswordState}
                />

                <a href="#" className="login-form__forgot-password">
                    Забыли пароль?
                </a>

                <div className="login-form__submit-block">
                    <div className="login-form__remember-password">
                        <input type="checkbox" name="" id="" />
                        <label>Запомить пароль</label>
                    </div>

                    <button
                        type="submit"
                        className="login-form__submit-button button green-button"
                        onClick={onClickSubmitButton}
                    >
                        Войти
                    </button>
                </div>
            </form>

            <div className="login-register">
                <h2 className="login-register__title">Нет аккаунта?</h2>
                <button className="login-register__button button">
                    Регистрация в Spotify
                </button>
            </div>
        </div>
    );
}

export default Login;
