/* eslint-disable react/prop-types */
import { useState } from "react"
import { Post } from "./Post"
import "./AllPosts.css"

import { FilterBar } from "../filter/FilterBar"

export const AllPosts = ({ allTopics, allPosts }) => {

    const [filteredPosts, setFilteredPosts] = useState([])


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