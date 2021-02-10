import React from 'react'
import './Blog.css'
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import nodejs from "../../images/nodejs.svg"
import mongodb from "../../images/mongodb.svg"
import firebase from "../../images/firebase.svg"
import git from "../../images/git.svg"
import bootstrap from "../../images/bootstrap.svg"

function Blog() {
    
    return (
        <div className="blog">
            <div className="blog__left">
                <h1><span className="blog__header">03.</span>My Blog</h1> 
                <div className="blog__container">
                        <a href="https://asifkhan.hashnode.dev/punishment-assistant-for-teachers-using-teachable-machine-learning" >
                        <div className="singleblog__card">
                            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612762045464/B86qAm-bt.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress" alt="Punishment Assistant for Teachers using Teachable Machine Learning 🚀" />
                            <div className="singleblog__cardinfo">
                                <h2>Punishment Assistant for Teachers using Teachable Machine Learning 🚀</h2>
                                <p>When I came to know about Hashnode Hackathon I was excited to build something. The idea of building something even so small always gives you the room to learn. I was excited to do so 😍.</p>
                            </div>
                        </div>
                        </a>
                </div> 
            </div>
            <div className="blog__right">
                <h1>Technologies I have worked with!</h1>
                <div className="blog__righttech">
                     <img src={html} alt="HTML"/> 
                     <img src={css} alt="CSS"/> 
                     <img src={javascript} alt="Javascript"/> 
                     <img src={react} alt="REact"/> 
                     <img src={nodejs} alt="Nodejs"/> 
                     <img src={bootstrap} alt="Bootstrap"/> 
                     <img src={mongodb} alt="MongoDb"/>                    
                     <img src={firebase} alt="Firebase"/> 
                     <img src={git} alt="Git"/> 
                </div>
            </div>             
        </div>
    )
}

export default Blog
