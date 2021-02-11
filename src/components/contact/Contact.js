import React from 'react'
import './Contact.css';
import Social from '../socials/Social'
import github from "../../images/github-fill.svg"
import twitter from "../../images/twitter-fill.svg"
import linkedin from "../../images/linkedin-fill.svg"
import hashnode from "../../images/hashnode.svg"

function Contact() {
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
    return (
        <div className="contact" id="contact">
            <span className="contact__header">04. What's Next?</span>
            <h1>Let's Connect</h1>
            <p>Feel free to reach out if you're looking for a developer, or want to discuss on something.</p>
            <Mailto email="asifkhan0410@gmail.com" subject="Hey Asif!" body="Hey I just came across your profile and wanted to contact you. Regards !"><button className="contact__contactme">Say Hello</button></Mailto> 
            <div className="contact__social">
                <Social imageurl={github} socialurl="https://github.com/asifkhan0410" alttext="Github"/>
                <Social imageurl={linkedin} socialurl="https://www.linkedin.com/in/aakhan0410" alttext="Linkedin"/>
                <Social imageurl={hashnode} socialurl="https://asifkhan.hashnode.dev" alttext="hashnode"/>
                <Social imageurl={twitter} socialurl="https://twitter.com/khanasif41" alttext="Twitter"/>
            </div>            
        </div>
    )
}

export default Contact
