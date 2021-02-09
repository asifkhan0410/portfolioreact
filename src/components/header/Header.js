import React from 'react'
import './Header.css'
import HeaderElement from './HeaderElement'
import signature from "../../images/signature.png"

function Header() {
    return (
        <div className="header">
            <img src= {signature} alt="Asif-Ali-Khan"/>
            <div className="header__option">
                <HeaderElement number="1" name="Home"/>
                <HeaderElement number="2" name="Projects"/>
                <HeaderElement number="3" name="Blog"/>
                <HeaderElement number="4" name="Contact"/>
            </div>
        </div>
    )
}

export default Header
