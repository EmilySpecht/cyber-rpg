import React from 'react'
import {DefaultButton} from "../default-button/default-button.component";

import "./smart-info.style.scss"

export const SmartInfo = ({character}) => {
    return (
        <div className="smart-info">
            <div className="smart-info__screen">
                <h1>{character.name}</h1>
                <span>Life: {character.life}</span>
                <span>Shield: {character.shield}</span>
                <span>Power: {character.power}</span>
                <span>Force power: {character.forcePower}</span>
                <span>Sub-power: {character.subpower}</span>
                <span>Force sub-power: {character.forceSubpower}</span>
                <span>Time recharge: {character.timeRecharge}</span>
                <h2>PHRASE</h2>
                <span>{character.phrase}</span>
            </div>
            <DefaultButton classname="smart-info__button"/>
        </div>
    )
}