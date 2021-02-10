import React from 'react'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'

function App() {
    return (
        <div>
           <Header/> 
           <About/>
           <Projects/>
           <Blog/>
        </div>
    )
}

export default App
