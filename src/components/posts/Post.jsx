/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ postObject }) => {
    return (
        <li className="post">
            <div className="post-info">Topic: {postObject.topic?.name}</div>

            <div className="post-info">
                <Link to={`/posts/${postObject.id}`}>
                    Title: {postObject.title}
                </Link>
            </div>
            <div className="post-info">
                Likes: {postObject.userLikedPosts?.length}
            </div>
        </li>
    );
};
