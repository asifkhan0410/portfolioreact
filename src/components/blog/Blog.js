import React, { useEffect, useState } from 'react'
import './Blog.css'
import SingleBlog from './SingleBlog';

const query = `
    {
      user(username: "asifkhan") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

function Blog() {
    const [Posts,setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();

        //console.log(ApiResponse.data.user.publication.posts);
        setPosts(ApiResponse.data.user.publication.posts);


    };
    return (
        <div className="blog">
            <h1><span className="blog__header">03.</span>My Blog</h1> 
            <div className="blog__container">
                {Posts.map((post, index) => (
                    <a key={index} href={`https://asifkhan.hashnode.dev/${post.slug}`} >
                        <SingleBlog post={post}/>
                    </a>
                ))}
            </div>          
        </div>
    )
}

export default Blog
