import React from 'react'

import './default-button.style.scss'

export const DefaultButton = ({classname, children}) => {
    return (
        <button className={`default-button + ${classname}`}>
            {children}
        </button>
    )
}