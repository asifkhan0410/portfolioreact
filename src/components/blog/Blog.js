import React, { useEffect, useState } from 'react'
import './Blog.css'
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import nodejs from "../../images/nodejs.svg"
import mongodb from "../../images/mongodb.svg"
import firebase from "../../images/firebase.svg"
import git from "../../images/git.svg"
import bootstrap from "../../images/bootstrap.svg"
import SingleBlog from './SingleBlog'
import { ThreeDots } from 'svg-loaders-react'

const query = `
    {
      user(username: "asifkhan") {
        publication {
          posts{
            _id,
            title,
            slug,
            totalReactions,
            brief,
            replyCount,
            responseCount,
            coverImage,
            dateFeatured,
            dateAdded,
          }
        }
      }
    }
  `;

function Blog() {
    const [post,setPost] = useState({
        posts: [],
        loading: true
    });

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();

        console.log(ApiResponse.data.user.publication.posts);
        setPost({ posts: ApiResponse.data.user.publication.posts, loading: false });


    };
    if (post.loading) return <div className="spinner"><ThreeDots fill="#e1bafd" trokeOpacity=".125" /></div>;
    return (
        <div className="blog" id="blog">
            <div className="blog__left">
                <h1><span className="blog__header">03.</span>Latest Blog</h1> 
                <div className="blog__container">
                {post.posts.map((post, index) => (
                    <a key={index} href={`https://asifkhan.hashnode.dev/${post.slug}`} >
                        <SingleBlog post={post} />
                    </a>
                ))}
                </div>
            </div> 
            <div className="blog__right">
                <h1>Technologies I have worked with!</h1>
                <div className="blog__righttech">
                     <img src={html} alt="HTML"/> 
                     <img src={css} alt="CSS"/> 
                     <img src={javascript} alt="Javascript"/> 
                     <img src={react} alt="REact"/> 
                     <img src={nodejs} alt="Nodejs"/> 
                     <img src={bootstrap} alt="Bootstrap"/> 
                     <img src={mongodb} alt="MongoDb"/>                    
                     <img src={firebase} alt="Firebase"/> 
                     <img src={git} alt="Git"/> 
                </div>
            </div>             
        </div>
    )
}

export default Blog
