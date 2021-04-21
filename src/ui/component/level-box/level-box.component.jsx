import React from 'react'
import {DefaultButton} from "../default-button/default-button.component";

import './level-box.style.scss'

export const LevelBox = ({character, classname}) => {
    return (
        <div className={`level-box ${classname}`}>
            <div className="level-box__screen">
                <span>{character.name}</span>
                <div className="level-box__screen__info">
                    <span>Level</span>
                    <span>{character.level}</span>
                </div>
                <div className="level-box__screen__info">
                    <span>XP</span>
                    <span>{character.xp}</span>
                </div>
                <div className="level-box__screen__info">
                    <span>Coins</span>
                    <span>{character.coins}</span>
                </div>
            </div>
            <DefaultButton classname="level-box__button"/>
        </div>
    )
}