import { useEffect, useState } from "react";
import {
    getLikedPostsByUserId,
    removeFavorite,
} from "../../services/postService";
import { Link } from "react-router-dom";

export const FavoritePosts = ({ allPosts, currentUser, refreshAllPosts }) => {
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        getLikedPostsByUserId(currentUser.id).then((data) => {
            setLikedPosts(data);
        });
    }, [allPosts]);

    const handleRemoveLike = (event) => {
        removeFavorite(event.target.value).then(refreshAllPosts());
        refreshAllPosts();
    };
    return (
        <div className="posts">
            <ul>
                {likedPosts.map((postObj) => {
                    return (
                        <div
                            className="post"
                            key={`post--myview--${postObj.post?.id}`}
                        >
                            <Link to={`/posts/${postObj.post?.id}`}>
                                {" "}
                                <div className="post-info">
                                    Title: {postObj.post?.title}
                                </div>{" "}
                            </Link>
                            <button
                                onClick={handleRemoveLike}
                                value={postObj.id}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
