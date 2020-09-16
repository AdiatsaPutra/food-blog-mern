import React from 'react'
import './Link.scss';

const Link = ({title, onClick}) => {
    return (
        <div>
            <p className="link" onClick={onClick}>{title}</p>
        </div>
    )
}

export default Link
