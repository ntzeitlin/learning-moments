/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Post.css";
import { Card, Flex, Text } from "@radix-ui/themes";

export const Post = ({ postObject }) => {
    return (
        <Card>
            <Flex direction="column">
                <Text>Topic: {postObject.topic?.name}</Text>

                <Text>
                    <Link to={`/posts/${postObject.id}`}>
                        Title: {postObject.title}
                    </Link>
                </Text>
                <Text>Likes: {postObject.userLikedPosts?.length}</Text>
            </Flex>
        </Card>
    );
};
