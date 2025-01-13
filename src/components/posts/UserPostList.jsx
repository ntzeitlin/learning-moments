/* eslint-disable react/prop-types */
// component to use in My Posts and Favorite Post views

import { useEffect, useState } from "react"
import { deletePost } from "../../services/postService"
import { Link } from "react-router-dom"

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
        <div>
            <h1>This is myposts view {currentUser.id}</h1>
            {userPosts.map(
                (postObj) => {
                    return (
                        <div key={`post--myview--${postObj.id}`}>
                            <Link to={`/posts/${postObj.id}`}> <div>Title: {postObj.title}</div> </Link>
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