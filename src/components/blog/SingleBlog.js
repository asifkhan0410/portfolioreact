import React from 'react'
import Icon from "../icons/Icon"
import FormatDate from '../../utils/FormatDate'
import comment from "../../images/comment-outlined.svg"
import heart from "../../images/heart.svg"


function SingleBlog({post}) {
    return (
        <div className="singleblog__card">
            {window.screen.width>415 ?(
            <>
                <div className="singleblog__cardleft">
                {FormatDate(post.dateAdded)}
                <h2>{post.title}</h2>
                <p>{post.brief}</p>
                <div className="singleblog__reactions">
                    <Icon imageurl={heart} alttext="Heart"/>{post.totalReactions} likes
                    <Icon imageurl={comment} alttext ="Comments"/>{Number(post.replyCount)+Number(post.responseCount)} comments
                </div>
            </div>
            <img src={post.coverImage} alt={post.title} />
            </> ): (
            <>
                <img src={post.coverImage} alt={post.title} />
                <div className="singleblog__cardleft">
                    {FormatDate(post.dateAdded)}
                    <h2>{post.title}</h2>
                    <p>{post.brief}</p>
                    <div className="singleblog__reactions">
                        <Icon imageurl={heart} alttext="Heart"/>{post.totalReactions} likes
                        <Icon imageurl={comment} alttext ="Comments"/>{Number(post.replyCount)+Number(post.responseCount)} comments
                    </div>
                </div>
         </>)}           
        </div>
    )
}

export default SingleBlog
