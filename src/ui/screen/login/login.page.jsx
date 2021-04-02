import React from 'react'

import './login.style.scss'
import {Input, Part, DefaultButton} from "../../component";

export const Login = () => {
    return (
        <div className="login">
            <div className="login__entry-form">
                <Part variant="top" classname="login__entry-form__part-top"/>
                <Input classname="login__entry-form__input"/>
                <Input classname="login__entry-form__input"/>
                <DefaultButton classname="login__entry-form__entry-button">Entrar</DefaultButton>
                <DefaultButton classname="login__entry-form__register-button">Cadastrar</DefaultButton>
                <Part variant="bottom" classname="login__entry-form__part-bottom"/>
            </div>
        </div>
    )
}
