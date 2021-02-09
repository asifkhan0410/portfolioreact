import React from 'react'
import "./Social.css"

function Social({imageurl,socialurl,alttext}) {
    return (
        <div className="social">
            <a href={socialurl} target="_blank"><img className="socialimg" src={imageurl} alt={alttext}/></a>
        </div>
    )
}

export default Social
