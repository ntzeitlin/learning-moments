/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TopicDropDown } from "./TopicDropDown";

export const FilterBar = ({ allTopics, allPosts, setFilteredPosts }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [dropDownValue, setDropDownValue] = useState(0);

    useEffect(() => {
        setFilteredPosts(allPosts);
        if (searchTerm) {
            setFilteredPosts(
                allPosts.filter((postObj) =>
                    postObj.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                )
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts, searchTerm]);

    useEffect(() => {
        setFilteredPosts(allPosts);
        if (dropDownValue) {
            setFilteredPosts(
                allPosts.filter(
                    (postObj) => postObj.topicId === parseInt(dropDownValue)
                )
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts, dropDownValue]);

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search Posts"
                className="post-search"
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <TopicDropDown
                allTopics={allTopics}
                setTopicValue={setDropDownValue}
                topicValue={dropDownValue}
            />
        </div>
    );
};
