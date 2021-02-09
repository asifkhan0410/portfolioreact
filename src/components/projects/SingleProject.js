import React from 'react'
import github from "../../images/github-fill.svg"
import folder from "../../images/folder.svg"
import goto from "../../images/goto.svg"
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import Social from '../socials/Social'


function SingleProject({githublink,gotolink,title,bio,languages}) {
    return (
        <div className="singleproject">
            <div className="singleproject__header">
                <Social imageurl={folder} socialurl="" alttext="Folder"/>
                <div className="singleproject__headeritems">
                    <Social imageurl={github} socialurl={githublink} alttext={title}/>
                    <Social imageurl={goto} socialurl={gotolink} alttext={bio}/>                    
                </div>
            </div>
            <div className="singleproject__body">
                <h1>{title}</h1>
                <p>{bio}</p>
            </div>
            <div className="singleproject__languagesused">
                {languages.map(language =>{
                    console.log(language)
                    if(language=="HTML"){
                        console.log("hi");
                        return <Social imageurl={html} socialurl={githublink} alttext="hi"/>
                    }else if(language=="CSS"){
                        return <Social imageurl={css} socialurl={githublink} alttext="hi"/>
                    }else if(language=="Javascript"){
                         return <Social imageurl={javascript} socialurl={githublink} alttext="hi"/>
                    }
                })}
            </div>
        </div>
    )
}

export default SingleProject
