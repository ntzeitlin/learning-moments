/* eslint-disable react/prop-types */
// component to use in My Posts and Favorite Post views

import { useEffect, useState } from "react"
import { deletePost } from "../../services/postService"
import { Link } from "react-router-dom"
import "./AllPosts.css"
import "./Post.css"

const UserPostList = ({ currentUser, allPosts, refreshAllPosts }) => {

    // get all posts and filter by userId to get all posts created by user
    // check to see if this is the myposts view or favorite view
    // send user generated posts to child component to generate individual posts
    // send viewtype

    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        const currentUserPosts = allPosts?.filter(({ userId }) => userId === currentUser?.id)
        setUserPosts(currentUserPosts)
    }, [allPosts, currentUser.id])

    const handleDelete = (event) => {
        deletePost(event.target.value).then(refreshAllPosts())

    }

    return (
        <div className="posts">
            <div><h1>My Posts:</h1></div>
            {userPosts.map(
                (postObj) => {
                    return (
                        <div className="post" key={`post--myview--${postObj.id}`}>
                            <Link to={`/posts/${postObj.id}`}> <div className="post-info">Title: {postObj.title}</div> </Link>
                            <button onClick={handleDelete} value={postObj.id}>
                                Delete
                            </button>
                        </div>
                    )
                }
            )}
        </div>)

}

export default UserPostList