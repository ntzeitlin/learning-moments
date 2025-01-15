import { useEffect, useState } from "react";
import {
    getLikedPostsByUserId,
    removeFavorite,
} from "../../services/postService";
import { Link } from "react-router-dom";
import { Button, Card } from "@radix-ui/themes";

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
            <h1>Favorite Posts:</h1>
            <ul>
                {likedPosts.map((postObj) => {
                    return (
                        <Card key={`post--myview--${postObj.post?.id}`}>
                            <Link to={`/posts/${postObj.post?.id}`}>
                                {" "}
                                <div className="post-info">
                                    Title: {postObj.post?.title}
                                </div>{" "}
                            </Link>
                            <Button
                                onClick={handleRemoveLike}
                                value={postObj.id}
                            >
                                Remove
                            </Button>
                        </Card>
                    );
                })}
            </ul>
        </div>
    );
};
