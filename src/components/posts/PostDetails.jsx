/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Post.css";
import { useEffect } from "react";
import { getPostById } from "../../services/postService";
import { useState } from "react";
import { submitLikedPost } from "../../services/userLikedPostService";
import {
    Section,
    Button,
    Card,
    Container,
    Heading,
    Flex,
    Box,
} from "@radix-ui/themes";
import { Pencil2Icon, HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

export const PostDetails = ({ currentUser, refreshAllPosts }) => {
    // get the current postId from the link parameters
    const { postId } = useParams();
    const navigate = useNavigate();
    // create state to store current post data
    const [postData, setPostData] = useState({});

    const renderPostDetail = () => {
        getPostById(postId).then((postDataObject) => {
            setPostData(postDataObject);
        });
    };

    // on initial render, get post data from post service using the postId
    // will return a post data object
    useEffect(() => {
        renderPostDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLike = () => {
        const newLike = {
            userId: currentUser.id,
            postId: parseInt(postId),
        };
        submitLikedPost(newLike).then(() => {
            renderPostDetail();
            refreshAllPosts();
        });
        navigate("/posts/favorite");
    };

    const handleEdit = () => {
        navigate("/posts/edit", {
            state: { shouldEdit: true, postId: postId },
        });
    };

    const checkIfLiked = () => {
        const alreadyLiked =
            postData.userLikedPosts?.filter(
                (likedPostObject) =>
                    parseInt(likedPostObject.userId) ===
                    parseInt(currentUser.id)
            ).length > 0;

        if (alreadyLiked) {
            return (
                <Button disabled>
                    <HeartFilledIcon />
                    Like
                </Button>
            );
            // <button disabled>Like</button>;
        } else {
            return (
                <Button onClick={handleLike}>
                    <HeartIcon /> Like
                </Button>
            );
            // <button onClick={handleLike}>Like</button>;
        }
    };

    return (
        <Section>
            <Container size="3">
                <Card size="4">
                    <header className="post-detail-header">
                        <Heading as="h1">Title: {postData.title}</Heading>
                        <Box>
                            <Flex direction="column" gap="2">
                                <h2>Topic: {postData.topic?.name}</h2>
                                <h2>
                                    Author:
                                    <Link to={`/profile/${postData.userId}`}>
                                        {postData.user?.name}
                                    </Link>
                                </h2>
                                <h2>Date: {postData.date}</h2>
                                <h2>
                                    Likes:{" "}
                                    {postData.userLikedPosts
                                        ? postData.userLikedPosts.length
                                        : 0}
                                </h2>
                            </Flex>
                        </Box>
                    </header>
                    <Box m="3">Body: {postData.body}</Box>
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
                            <Button
                                onClick={handleEdit}
                                size="1"
                                variant="solid"
                            >
                                {" "}
                                <Pencil2Icon />
                                Edit
                            </Button>
                        ) : (
                            // <button onClick={handleEdit}>Edit</button>
                            checkIfLiked()
                        )}
                    </div>
                </Card>
            </Container>
        </Section>
    );
};
