/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../../services/postService"
import { Post } from "./Post"
import "./AllPosts.css"

import { FilterBar } from "../filter/FilterBar"

export const AllPosts = ({ allTopics }) => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])



    // state for all posts and topics
    useEffect(() => {
        getAllPosts().then(postArray => setAllPosts(postArray))
    }, [])

    return <div>
        <FilterBar
            allTopics={allTopics}
            allPosts={allPosts}
            setFilteredPosts={setFilteredPosts}
        />

        <ul className="posts">
            {
                filteredPosts.map(
                    (postObject) => {
                        return <Post postObject={postObject} key={`post--summary--${postObject.id}`} />
                    }
                )
            }
        </ul>
    </div>
}