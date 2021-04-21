import React from 'react'
import {Screw} from '../screw/screw.component';

import './part.style.scss'

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