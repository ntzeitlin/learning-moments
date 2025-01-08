import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../services/postService"
import { Post } from "./Post"
import "./AllPosts.css"
import { getAllTopics } from "../services/topicService"
import { FilterBar } from "./FilterBar"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])



    // state for all posts and topics
    useEffect(() => {
        getAllPosts().then(postArray => setAllPosts(postArray))
        getAllTopics().then(topicArray => setAllTopics(topicArray))
    }, [])

    return <div>
        <FilterBar
            allTopics={allTopics}
            allPosts={allPosts}
            setFilteredPosts={setFilteredPosts}
            filteredPosts={filteredPosts}
        />

        <ul className="posts">
            {
                filteredPosts.map(
                    (postObject) => {
                        return <Post postObject={postObject} key={postObject.id} />
                    }
                )
            }
        </ul>
    </div>
}