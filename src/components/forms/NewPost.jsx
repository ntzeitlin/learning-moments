/* eslint-disable react/prop-types */
import { useState } from "react"
import { TopicDropDown } from "../filter/TopicDropDown"
import { useNavigate } from "react-router-dom"
import { createNewPost } from "../../services/postService"

export const NewPost = ({ allTopics, currentUser }) => {
    const navigate = useNavigate()

    const [topicValue, setTopicValue] = useState(0)
    const [bodyValue, setBodyValue] = useState("")
    const [titleValue, setTitleValue] = useState("")

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value)
    }
    const handleBodyChange = (event) => {
        setBodyValue(event.target.value)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const postDataObject = {
            userId: currentUser.id,
            title: titleValue,
            topicId: topicValue,
            body: bodyValue,
            date: new Date(),
        }


        if (titleValue && topicValue && bodyValue) {
            console.log(postDataObject)

            createNewPost(postDataObject).then(() => {
                navigate("/")
            })
        }
    }

    return (
        <form>
            <h1>New Post</h1>
            <fieldset>
                <div>
                    <label>Topic:</label>
                    <TopicDropDown allTopics={allTopics} setTopicValue={setTopicValue} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={titleValue ? titleValue : ""}
                        required
                        onChange={handleTitleChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Post body:</label>
                    <textarea
                        name="body"
                        value={bodyValue ? bodyValue : ""}
                        required
                        onChange={handleBodyChange}
                    ></textarea>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <button onClick={handleSave}>Save Post</button>
                </div>
            </fieldset>
        </form>
    )
}