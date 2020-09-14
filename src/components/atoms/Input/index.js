import React from 'react'
import './Input.scss'

const Input = ({placeholder}) => {
    return (
        <div>
            <input className="input" placeholder={placeholder}></input>
        </div>
    )
}

export default Input;
