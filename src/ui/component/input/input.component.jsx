import React from 'react'

import './input.style.scss'
export const Input = ({classname, type}) => {
    return <input className={`input ${classname}`} type={type}/>
}