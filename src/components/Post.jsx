/* eslint-disable react/prop-types */
import "./Post.css"

export const Post = ({ postObject }) => {

    return (
        <li className="post">
            <div className="post-info">
                Topic: {postObject.topic.name}
            </div>
            <div className="post-info">
                Title: {postObject.title}
            </div>
            <div className="post-info">
                Likes: {postObject.userLikedPosts.length}
            </div>
        </li>
    )
}