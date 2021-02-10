import React, { useState } from 'react'
import './Header.css'
import Icon from '../icons/Icon'
import HeaderElement from './HeaderElement'
import signature from "../../images/signature.png"
import menucrumb from "../../images/bx-menu-alt-right.svg"
import cross from "../../images/circle-with-cross.svg"

function Header() {
    const [navtoggle, setnavtoggle]= useState(false);
    const toggle =() => setnavtoggle(!navtoggle)
    
    return (
        <div className="header">
            <img className="signature" src= {signature} alt="Asif-Ali-Khan"/>
            {window.screen.width>375? (<div className="header__option">
                <a href="#"><HeaderElement number="1" name="Home"/></a>
                <a href="#"><HeaderElement number="2" name="Projects"/></a>
                <a href="#"><HeaderElement number="3" name="Blog"/></a>
                <a href="#"><HeaderElement number="4" name="Contact"/></a>
            </div>):
            (
            <div className="header_mobile">
                <div className="header__burger" onClick={toggle}>
                    {navtoggle? <img className="cross" src={cross} alt="text"/>: <img className="cross" src={menucrumb} alt="text"/>}
                </div>
                {navtoggle?<div className="header__nav">
                <a href="#about" onClick={e => setnavtoggle(false)}><HeaderElement number="1" name="Home"/></a>
                <a href="#projects" onClick={e => setnavtoggle(false)}><HeaderElement number="2" name="Projects"/></a>
                <a href="#blog" onClick={e => setnavtoggle(false)}><HeaderElement number="3" name="Blog"/></a>
                <a href="#contact" onClick={e => setnavtoggle(false)}><HeaderElement number="4" name="Contact"/></a>
                </div>:""}
            </div>
            )}
        </div>
    )   
}

export default Header
