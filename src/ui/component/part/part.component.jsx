import React from 'react'

import './part.style.scss'
import {Screw} from "../screw/screw.component";

export const Part = ({variant, classname}) => {
    return (
        <div className={`part--${variant} ${classname}`}>
            <div className="part__two-buttons">
                <Screw />
                <Screw />
            </div>
        </div>
    )
}