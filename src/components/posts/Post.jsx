/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./Post.css"

export const Post = ({ postObject }) => {

    return (
        <li className="post">
            <div className="post-info">
                Topic: {postObject.topic.name}
            </div>
            <Link to={`/posts/${postObject.id}`}>
                <div className="post-info">
                    Title: {postObject.title}
                </div>
            </Link>
            <div className="post-info">
                Likes: {postObject.userLikedPosts.length}
            </div>
        </li>
    )
}