import React from 'react'
import HeaderElement from './HeaderElement'

function Header() {
    return (
        <div className="header">
            <img src="" alt="Asif-Ali-Khan"/>
            <div className="header__option">
                <HeaderElement number={1} name={Home}/>
                <HeaderElement number={2} name={Projects}/>
                <HeaderElement number={3} name={Blog}/>
                <HeaderElement number={4} name={Contact}/>
            </div>
        </div>
    )
}

export default Header
