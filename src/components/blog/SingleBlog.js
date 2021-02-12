import React from 'react'

function SingleBlog({post}) {
    return (
        <div className="singleblog__card">
            <div className="singleblog__cardleft">
                
                <h2>{post.title}</h2>
                <p>{post.brief}</p>
            </div>
            <img src={post.coverImage} alt={post.title} />            
        </div>
    )
}

export default SingleBlog
