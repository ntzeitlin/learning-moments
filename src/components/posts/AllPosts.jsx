/* eslint-disable react/prop-types */
import { useState } from "react";
import { Post } from "./Post";
import "./AllPosts.css";

import { FilterBar } from "../filter/FilterBar";
import { Container, Grid } from "@radix-ui/themes";

export const AllPosts = ({ allTopics, allPosts }) => {
    const [filteredPosts, setFilteredPosts] = useState([]);

    return (
        <div>
            <FilterBar
                allTopics={allTopics}
                allPosts={allPosts}
                setFilteredPosts={setFilteredPosts}
            />

            <Container size="5" className="posts">
                <Grid gap="4" columns="3" rows="repeat(2)" width="auto">
                    {filteredPosts.map((postObject) => {
                        return (
                            <Post
                                postObject={postObject}
                                key={`post--summary--${postObject.id}`}
                            />
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};
