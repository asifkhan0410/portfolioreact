import React from 'react'
import SingleProject from './SingleProject'
import "./Project.css"

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects__grid">
                <SingleProject githublink="https://github.com/asifkhan0410/weatherapp" gotolink="https://khanweatherapp.netlify.app/" title="Weathery" bio="A weather application built using react with the help of an API" languages={["Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/weatherapp" gotolink="https://khanweatherapp.netlify.app/" title="Weathery" bio="A weather application built using react with the help of an API" languages={["Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/weatherapp" gotolink="https://khanweatherapp.netlify.app/" title="Weathery" bio="A weather application built using react with the help of an API" languages={["Javascript","HTML","CSS"]}/>
            </div>            
        </div>
    )
}

export default Projects
