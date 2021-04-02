import React from 'react'
import SingleProject from './SingleProject'
import "./Project.css"

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1><span className="projects__header">02.</span>My Projects</h1>
            <div className="projects__grid">
                <SingleProject githublink="https://github.com/asifkhan0410/weatherapp" gotolink="https://khanweatherapp.netlify.app/" title="Weathery" bio="A weather application built to detect the current weather of a city with the help of an API. It also forecast next 4 days weather using the same api." languages={["api","react","Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/punishmentassistant" gotolink="https://punishmentassistant.vercel.app/" title="Punishment Assistant" bio="Teacher's Punishment Assistant powered by Supervised Machine Learning. The tool helps teachers to check for a student when he/she is punished." languages={["Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/javascript30in30/tree/master/canvasgame" gotolink="http://upanddownroundandround.netlify.app/" title="Up&Down Game" bio="A simple game built in which a gamepiece has to dodge various vertical obstacles in order to survive. Come let's break the high score" languages={["Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/whatsappclone" gotolink=" https://whatsapp-24799.web.app/" title="WhatsApp Web" bio="A WhatsApp web clone built to chat in different room.YOu can login using Google Auth & start chatting in different rooms. Chat is powered with live interaction" languages={["react","nodejs","mongodb","firebase","Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/findcountries" gotolink="http://findcountries-asifkhan0410.vercel.app/" title="Country Gala" bio="Country Gala web app let's you see countries on the homepage, search for a country, filter countries by region, details about a country with light/dark mode" languages={["react","api","Javascript","HTML","CSS"]}/>
                
                {/* <SingleProject githublink="https://github.com/asifkhan0410/amazonclone" gotolink="https://project-83774.web.app/" title="Amazon Clone" bio="A react web app build with firebase sign-in integration.It uses Stripe API(checkout), Context-API(global state management) & React Router(switching pages)." languages={["react","api","firebase","Javascript","HTML","CSS"]}/>
                <SingleProject githublink="https://github.com/asifkhan0410/itunes-search" gotolink="https://itunesearchify.netlify.app/" title="Searchify" bio="A basic UI which has a search bar from which you can search a particular song it displays below all the songs related to it. it uses Itunes API" languages={["react","api","Javascript","HTML","CSS"]}/> */}
            </div>            
        </div>
    )
}

export default Projects
