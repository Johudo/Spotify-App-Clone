import * as React from "react";
import axios, { AxiosResponse } from "axios";
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "../../blocks/Input";
import SpotifyLogo from "../../../svg/logo.svg";
import { API_URL } from "../../../config";
import { toLogIn } from "../../../store/creators/isLoggedInCreator";
import { IsLoggedInState } from "../../../store/types/isLoggedInTypes";

import "./LoginView.scss";

export function LoginView() {
    const [usernameState, setUsernameState] = React.useState("");
    const [passwordState, setPasswordState] = React.useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const isLoggedInState: IsLoggedInState = useSelector(
        (state: IsLoggedInState) => state
    );

    // Redirect if user logged in
    React.useEffect(() => {
        if (isLoggedInState.isLoggedIn) history.push("/");
    }, []);

    const onClickSubmitButton = (event: React.MouseEvent): void => {
        const username = usernameState;
        const password = md5(passwordState);

        axios
            .get(API_URL + "/password", {
                params: {
                    username: username,
                    password: password,
                },
            })
            .then((res: AxiosResponse) => {
                dispatch(toLogIn(res.data.username));
                localStorage.setItem("username", username);
                history.push("/");
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

                <Input
                    label="Имя пользователя"
                    id="username"
                    onChange={setUsernameState}
                />
                <Input
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
