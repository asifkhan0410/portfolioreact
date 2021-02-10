import React from 'react'

function SingleBlog({post}) {
    return (
        <div className="singleblog__card">
            <img src={post.coverImage} alt={post.title} />
            <div className="singleblog__cardinfo">
                <h2>{post.title}</h2>
                <p>{post.brief}</p>
            </div>
        </div>
    )
}

export default SingleBlog
