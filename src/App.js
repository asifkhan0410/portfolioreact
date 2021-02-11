import React from 'react'
import './App.css'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import email from './images/email-alt.svg'

function App() {
    return (
        <div>
            <div className="app"><img src={email} alt="contact-email"/><h1>asifkhan0410@gmail.com</h1></div>
           <Header/> 
            <About/>
            <Projects/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
