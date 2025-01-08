/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const FilterBar = ({ allTopics, allPosts, setFilteredPosts, filteredPosts }) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [dropDownValue, setDropDownValue] = useState(0)

    useEffect(() => {
        setFilteredPosts(allPosts)
        if (searchTerm) {
            setFilteredPosts(filteredPosts.filter(postObj => postObj.title.toLowerCase().includes(searchTerm.toLowerCase())))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts, searchTerm])

    useEffect(() => {
        setFilteredPosts(allPosts)
        if (dropDownValue) {
            setFilteredPosts(filteredPosts.filter(postObj => postObj.topicId === parseInt(dropDownValue)))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts, dropDownValue])

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search Posts"
                className="post-search"
                onChange={event => setSearchTerm(event.target.value)}
            />
            <div>
                <select name="topics" className="topic-filter" onChange={event => setDropDownValue(event.target.value)}>
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
    )
}