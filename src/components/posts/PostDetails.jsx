/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import "./Post.css"
import { useEffect } from "react"
import { getPostById } from "../../services/postService"
import { useState } from "react"
import { submitLikedPost } from "../../services/userLikedPostService"

export const PostDetails = ({ currentUser }) => {
    // get the current postId from the link parameters
    const { postId } = useParams()

    // create state to store current post data
    const [postData, setPostData] = useState({})

    const renderPostDetail = () => {
        getPostById(postId).then((postDataObject) => {
            setPostData(postDataObject)
        })
    }

    // on initial render, get post data from post service using the postId
    // will return a post data object
    useEffect(() => {
        renderPostDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLike = () => {
        const newLike = {
            userId: currentUser.id,
            postId: parseInt(postId)
        }
        submitLikedPost(newLike).then(() => {
            renderPostDetail()
        })
    }

    return (
        <section className="post-detail">
            <header className="post-detail-header">
                <h1>Title: {postData.title}</h1>
                <h2>Topic: {postData.topic?.name}</h2>
                <h2>Author: {postData.user?.name}</h2>
                <h2>Date: {postData.date}</h2>
                <h2>Likes: {postData.userLikedPosts ? postData.userLikedPosts.length : 0}</h2>
            </header>
            <div>
                Body: {postData.body}
            </div>
            <div className="btn-container">

                {/* Given the user is the author of the post
                    Then a button to edit the post should display
                    When the user clicks the edit button */}

                {/* Given the user is not the author of the post
                    Then a button to like the post should display
                    When the user clicks the like button
                    Then the like relationship will save to the database */}

                {/* Get currentUser from props and check its id against the post's id to render buttons */}
                {currentUser?.id === postData.userId ? (
                    <button>Edit</button>
                ) : (
                    <button onClick={handleLike}>Like</button>
                )}
            </div>
        </section>
    )
}