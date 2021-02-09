import React from 'react'

function HeaderElement({number,name}) {
    return (
        <div className="header__optionelement">
            <div className="header__optionelementbody">
                <h3 className="header__optionelementnumber">0{number}.</h3>
                <h2 className="header__optionelementname">{name}</h2>
            </div>
        </div>
    )
}

export default HeaderElement
