import React from 'react'

function Social({imageurl,socialurl,alttext}) {
    return (
        <div className="social">
            <img className="social" href={socialurl} src={imageurl} alt={alttext}/>
        </div>
    )
}

export default Social
