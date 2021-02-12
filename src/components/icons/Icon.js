import React from 'react'
import "./Icon.css"

function Icon({imageurl,alttext}) {
    return (
        <div className="icon">
            <img className="iconimg" src={imageurl} alt={alttext}/>
        </div>
    )
}

export default Icon
