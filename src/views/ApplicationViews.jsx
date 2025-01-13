import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/posts/AllPosts"
import { NavBar } from "../components/nav/NavBar"
import { useState, useEffect } from "react"
import { PostDetails } from "../components/posts/PostDetails"
import { NewPost } from "../components/forms/NewPost"
import { getAllTopics } from "../services/topicService"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [allTopics, setAllTopics] = useState([])


    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
        getAllTopics().then(topicArray => setAllTopics(topicArray))
    }, [])


    return (
        <Routes>
            <Route path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }>
                <Route index element={<AllPosts allTopics={allTopics} />} />
                <Route path="posts">
                    <Route index element={<AllPosts allTopics={allTopics} />} />
                    <Route path=":postId" element={<PostDetails currentUser={currentUser} />} />
                </Route>
                <Route path="newpost" element={<NewPost allTopics={allTopics} currentUser={currentUser} />} />


            </Route>
        </Routes>
    )
}