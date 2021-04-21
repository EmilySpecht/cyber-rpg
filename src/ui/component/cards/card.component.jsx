import React from 'react'

import './card.style.scss'

export const Card = ({classname, onclick, backgroundImage}) => {
    return (
        <button className={`card + ${classname}`} onClick={onclick} style={{backgroundImage: `url(${backgroundImage})`}}/>
    )
}