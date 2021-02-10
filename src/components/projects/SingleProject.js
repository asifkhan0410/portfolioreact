import React from 'react'
import github from "../../images/github-fill.svg"
import folder from "../../images/folder.svg"
import goto from "../../images/goto.svg"
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import nodejs from "../../images/nodejs.svg"
import mongodb from "../../images/mongodb.svg"
import api from "../../images/api.svg"
import firebase from "../../images/firebase.svg"
import Social from '../socials/Social'
import Icon from '../icons/Icon'


function SingleProject({githublink,gotolink,title,bio,languages}) {
    return (
        <div className="singleproject">
            <div className="singleproject__header">
                <span className="singleproject__headerwraper"><Icon imageurl={folder} alttext="Folder"/></span>
                <div className="singleproject__headeritems">
                    <Social imageurl={github} socialurl={githublink} alttext={title}/>
                    <span className="singleproject__headerwraper"><a href={gotolink}><Icon imageurl={goto} alttext={bio}/></a></span>                    
                </div>
            </div>
            <div className="singleproject__body">
                <h2>{title}</h2>
                <p>{bio}</p>
            </div>
            <div className="singleproject__languagesused">
                {languages.map(language =>{
                    if(language=="HTML")return <Icon imageurl={html} alttext={language}/>
                    else if(language=="CSS")return <Icon imageurl={css} alttext={language}/>
                    else if(language=="Javascript")return <Icon imageurl={javascript} alttext={language}/>
                    else if(language=="react")return <Icon imageurl={react}  alttext={language}/>
                    else if(language=="nodejs")return <Icon imageurl={nodejs}  alttext={language}/>
                    else if(language=="mongodb")return <Icon imageurl={mongodb} alttext={language}/>
                    else if(language=="api")return <Icon imageurl={api}  alttext={language}/>
                    else if(language=="firebase")return <Icon imageurl={firebase} alttext={language}/>
                })}
            </div>
        </div>
    )
}

export default SingleProject
