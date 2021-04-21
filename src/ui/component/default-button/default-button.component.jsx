import React from 'react'

import './default-button.style.scss'

export const DefaultButton = ({classname, children, onclick}) => {
    return (
        <button className={`default-button + ${classname}`} onClick={onclick}>
            {children}
        </button>
    )
}