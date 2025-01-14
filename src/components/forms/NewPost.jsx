/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TopicDropDown } from "../filter/TopicDropDown";
import { useLocation, useNavigate } from "react-router-dom";
import {
    createNewPost,
    editPost,
    getPostById,
} from "../../services/postService";

export const NewPost = ({ allTopics, currentUser, refreshAllPosts }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [topicValue, setTopicValue] = useState(0);
    const [bodyValue, setBodyValue] = useState("");
    const [titleValue, setTitleValue] = useState("");

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBodyValue(event.target.value);
    };

    const handleSave = (event) => {
        event.preventDefault();

        const postDataObject = {
            userId: currentUser.id,
            title: titleValue,
            topicId: topicValue,
            body: bodyValue,
            date: new Date(),
        };

        if (titleValue && topicValue && bodyValue) {
            createNewPost(postDataObject).then(() => {
                refreshAllPosts();
                navigate("/posts/mine");
            });
        } else {
            window.alert("Please fill out all fields");
        }
    };

    const shouldEdit = location.state?.shouldEdit;
    const currentPostId = location.state?.postId;

    const getPostInfo = () => {
        getPostById(location.state.postId).then((data) => {
            setTitleValue(data.title);
            setBodyValue(data.body);
            setTopicValue(parseInt(data.topicId));
        });
    };

    useEffect(() => {
        if (shouldEdit) {
            getPostInfo();
        }
    }, []);

    const handleEdit = (event) => {
        event.preventDefault();
        const postDataObject = {
            userId: currentUser.id,
            title: titleValue,
            topicId: topicValue,
            body: bodyValue,
            date: new Date(),
        };

        editPost(postDataObject, parseInt(currentPostId)).then(() => {
            refreshAllPosts();
            navigate("/posts/mine");
        });
    };

    return (
        <form>
            {shouldEdit ? <h1>Edit Post</h1> : <h1>New Post</h1>}
            {location.state?.postId}
            <fieldset>
                <div>
                    <label>Topic:</label>
                    <TopicDropDown
                        allTopics={allTopics}
                        topicValue={topicValue}
                        setTopicValue={setTopicValue}
                    />
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
                {/* ADD BUTTON FOR WHEN SUBMITTING EDITS INSTEAD OF POSTING A NEW POST */}
                <div>
                    {shouldEdit ? (
                        <button onClick={handleEdit}>Submit Edit</button>
                    ) : (
                        <button onClick={handleSave}>Save Post</button>
                    )}
                </div>
            </fieldset>
        </form>
    );
};
