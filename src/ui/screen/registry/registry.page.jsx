import React from 'react'
import {BackButton, DefaultButton, Input, Part} from '../../component';

import './registry.syle.scss'

export const Registry = () => {
    return (
        <div className="registry">
            <div className="registry__form-spot">
                <Part variant="top" classname="registry__form-spot__part-top"/>
                <span className="registry__form-spot__text-title">CADASTRE-SE</span>
                <form className="registry__form-spot__form">
                    <Input classname="registry__form-spot__form__first-input"/>
                    <div className="registry__form-spot__form__inputs-spot">
                        <Input classname="registry__form-spot__form__inputs-spot__inputs"/>
                        <Input classname="registry__form-spot__form__inputs-spot__inputs"/>
                        <Input classname="registry__form-spot__form__inputs-spot__inputs"/>
                        <Input classname="registry__form-spot__form__inputs-spot__inputs"/>
                    </div>
                    <DefaultButton classname="registry__form-spot__form__ready-button">PRONTO</DefaultButton>
                </form>
                <Part variant="bottom" classname="registry__form-spot__part-bottom"/>
            </div>
            <BackButton />
        </div>
    )
}