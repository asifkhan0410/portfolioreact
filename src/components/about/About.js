import React from 'react'
import Social from '../socials/Social'
import github from "../../images/github-fill.svg"
import twitter from "../../images/twitter-fill.svg"
import linkedin from "../../images/linkedin-fill.svg"
import hashnode from "../../images/hashnode.svg"
import dp from "../../images/profiledp.jpg"
import './About.css'

function About() {
    return (
        <div className="about">
            {window.screen.width>375?(<div className="about__left">
                <h4 className="about__leftintro">Hey! Introducing myself, I'm</h4>
                <h2 className="about__leftname">Asif Ali Khan</h2>
                <p className="about__leftbio">Front-end Developer. Doing interesting things that matters. I believe "the learning curve should never have a negative slope". Currently sharpening my axe 🪓 (Javascript & React).</p>
                <button className="about__leftcontactme">Get In Touch</button>
            </div>):
            (<div className="about__right">
                <img className="about__rightbioimage" src={dp} alt="alt"/>
                <div className="about__rightsocials">
                    <Social imageurl={github} socialurl="https://github.com/asifkhan0410" alttext="Github"/>
                    <Social imageurl={linkedin} socialurl="https://www.linkedin.com/in/aakhan0410" alttext="Linkedin"/>
                    <Social imageurl={hashnode} socialurl="https://asifkhan.hashnode.dev" alttext="hashnode"/>
                    <Social imageurl={twitter} socialurl="https://twitter.com/khanasif41" alttext="Twitter"/>
                </div>
            </div>)}
            {window.screen.width<375?(<div className="about__left">
                <h4 className="about__leftintro">Hey! Introducing myself, I'm</h4>
                <h2 className="about__leftname">Asif Ali Khan</h2>
                <p className="about__leftbio">Front-end Developer. Doing interesting things that matters. I believe "the learning curve should never have a negative slope". Currently sharpening my axe 🪓 (Javascript & React).</p>
                <button className="about__leftcontactme">Get In Touch</button>
            </div>):
            (<div className="about__right">
                <img className="about__rightbioimage" src={dp} alt="alt"/>
                <div className="about__rightsocials">
                    <Social imageurl={github} socialurl="https://github.com/asifkhan0410" alttext="Github"/>
                    <Social imageurl={linkedin} socialurl="https://www.linkedin.com/in/aakhan0410" alttext="Linkedin"/>
                    <Social imageurl={hashnode} socialurl="https://asifkhan.hashnode.dev" alttext="hashnode"/>
                    <Social imageurl={twitter} socialurl="https://twitter.com/khanasif41" alttext="Twitter"/>
                </div>
            </div>)}
        </div>
    )
}

export default About
