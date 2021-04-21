import React from 'react'
import { useHistory } from 'react-router-dom'
import {Input, Part, DefaultButton} from "../../component";

import './login.style.scss'

export const Login = () => {
    const history = useHistory()

    const goRegistry = () => {
        history.push("/registry")
    }

    const goCharacterPage = () => {
        history.push("/character")
    }

    return (
        <div className="login">
            <div className="login__entry-form">
                <Part variant="top" classname="login__entry-form__part-top"/>
                <Input classname="login__entry-form__input"/>
                <Input classname="login__entry-form__input"/>
                <DefaultButton classname="login__entry-form__entry-button" onclick={goCharacterPage}>Entrar</DefaultButton>
                <DefaultButton classname="login__entry-form__register-button" onclick={goRegistry}>Cadastrar</DefaultButton>
                <Part variant="bottom" classname="login__entry-form__part-bottom" />
            </div>
        </div>
    )
}
