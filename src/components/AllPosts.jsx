import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../services/postService"
import { Post } from "./Post"
import "./AllPosts.css"
import { getAllTopics } from "../services/topicService"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])

    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [dropDownValue, setDropDownValue] = useState(0)

    useEffect(() => {
        getAllPosts().then(postArray => setAllPosts(postArray))
        getAllTopics().then(topicArray => setAllTopics(topicArray))
    }, [])

    useEffect(() => {
        setFilteredPosts(allPosts)
        if (searchTerm) {
            setFilteredPosts(allPosts.filter(postObj => postObj.title.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }, [allPosts, searchTerm])

    useEffect(() => {
        setFilteredPosts(allPosts)
        if (dropDownValue) {
            setFilteredPosts(filteredPosts.filter(postObj => postObj.topicId === parseInt(dropDownValue)))
        }
    }, [dropDownValue])

    return <div>
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search Posts"
                className="post-search"
                onChange={event => setSearchTerm(event.target.value)}
            />
            <div>
                <select name="topics" onChange={event => setDropDownValue(event.target.value)}>
                    <option value="">Choose Topic...</option>
                    {
                        allTopics.map((topicObj) => (
                            <option value={topicObj.id} key={topicObj.id}>
                                {topicObj.name}
                            </option>
                        )
                        )
                    }

                </select>
            </div>
        </div>
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