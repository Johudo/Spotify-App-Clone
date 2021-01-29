import * as React from 'react';
import InputBlock from './InputBlock';
import SpotifyLogo from '../svg/logo.svg'

import '../styles/LogIn.scss';

function LogIn() {

    const [usernameState, setUsernameState] = React.useState('');
    const [passwordState, setPasswordState] = React.useState('');

    return (
        <div className='login-window'>
            <header className='login-header'>
                <a href='/' className="login-header__logo">
                    <SpotifyLogo />
                </a>
            </header>

            <form className='login-form'>
                <h1 className='login-form__title'>Чтобы продолжить, войдите в Spotify.</h1>
                
                <InputBlock label="Имя пользователя" id="username" onChange={ setUsernameState } />
                <InputBlock label="Пароль" type="password" id="password" onChange={ setPasswordState } />

                <a href="#" className='login-form__forgot-password'>Забыли пароль?</a>

                <div className='login-form__submit-block'>
                    <div className='login-form__remember-password'>
                        <input type="checkbox" name="" id=""/>
                        <label>Запомить пароль</label>
                    </div>

                    <button 
                        type="submit"
                        className='login-form__submit-button' 
                        onClick={ (e) =>  { e.preventDefault(); console.log(usernameState, passwordState) } }
                    >Войти</button>
                </div>
            </form>

            <div className="login-register">
                <h2 className="login-register__title">Нет аккаунта?</h2>
                <button className="login-register__button">Регистрация в Spotify</button>
            </div>
        </div>
        
    )
}

export default LogIn;