import React from 'react'
import "./Icon.css"

function Social({imageurl,alttext}) {
    return (
        <div className="icon">
            <img className="iconimg" src={imageurl} alt={alttext}/>
        </div>
    )
}

export default Social
