/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    getLikedPostsByUserId,
    removeFavorite,
} from "../../services/postService";
import { Link } from "react-router-dom";
import { Button, Card, Container, Heading, Section } from "@radix-ui/themes";

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
        <Section>
            <Container size="3">
                <Heading size="5" weight="medium">
                    Favorite Posts
                </Heading>
                {likedPosts.map((postObj) => {
                    return (
                        <Card
                            m="1em"
                            size="2"
                            key={`post--myview--${postObj.post?.id}`}
                        >
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
                                Unfavorite
                            </Button>
                        </Card>
                    );
                })}
            </Container>
        </Section>
        // <div className="posts">
        // </div>
    );
};
