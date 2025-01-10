import { useParams } from "react-router-dom"
import "./Post.css"
import { useEffect } from "react"
import { getPostById } from "../../services/postService"
import { useState } from "react"

export const PostDetails = () => {
    const { postId } = useParams()

    const [postData, setPostData] = useState({})

    useEffect(() => {
        getPostById(postId).then((postDataObject) => {
            setPostData(postDataObject)
        })
    }, [])

    return (
        <section className="post-detail">
            <header className="post-detail-header">
                <h1>Title: {postData.title}</h1>
                <h2>Topic: {postData.topic?.name}</h2>
                <h2>Date: {postData.date}</h2>
                <h2>Likes: {postData.userLikedPosts ? postData.userLikedPosts.length : 0}</h2>
            </header>
            <div>
                {postData.body}
            </div>
        </section>
    )
}