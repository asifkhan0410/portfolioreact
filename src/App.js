import React from 'react'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'

function App() {
    return (
        <div>
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
