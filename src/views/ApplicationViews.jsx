import { Routes, Route, Outlet } from "react-router-dom";
import { AllPosts } from "../components/posts/AllPosts";
import { NavBar } from "../components/nav/NavBar";
import { useState, useEffect } from "react";
import { PostDetails } from "../components/posts/PostDetails";
import { NewPost } from "../components/forms/NewPost";
import { getAllTopics } from "../services/topicService";
import { getAllPosts } from "../services/postService";
import UserPostList from "../components/posts/UserPostList";
import { FavoritePosts } from "../components/posts/FavoritePosts";

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [allTopics, setAllTopics] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    const refreshAllPosts = () => {
        getAllPosts().then((postArray) => setAllPosts(postArray));
    };

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user");
        const learningUserObject = JSON.parse(localLearningUser);
        setCurrentUser(learningUserObject);
        getAllTopics().then((topicArray) => setAllTopics(topicArray));
        refreshAllPosts();
    }, []);

    //should current user be in the above dependency array?

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route
                    index
                    element={
                        <AllPosts allTopics={allTopics} allPosts={allPosts} />
                    }
                />
                <Route
                    path="posts/mine"
                    element={
                        <UserPostList
                            currentUser={currentUser}
                            allPosts={allPosts}
                            refreshAllPosts={refreshAllPosts}
                        />
                    }
                />
                <Route path="posts">
                    <Route index element={<AllPosts allTopics={allTopics} />} />
                    <Route
                        path=":postId"
                        element={
                            <PostDetails
                                currentUser={currentUser}
                                refreshAllPosts={refreshAllPosts}
                            />
                        }
                    />
                    <Route
                        path="new"
                        element={
                            <NewPost
                                allTopics={allTopics}
                                currentUser={currentUser}
                                refreshAllPosts={refreshAllPosts}
                            />
                        }
                    />
                    <Route
                        path="edit"
                        element={
                            <NewPost
                                allTopics={allTopics}
                                currentUser={currentUser}
                                refreshAllPosts={refreshAllPosts}
                            />
                        }
                    />
                    <Route
                        path="favorite"
                        element={
                            <FavoritePosts
                                currentUser={currentUser}
                                refreshAllPosts={refreshAllPosts}
                                allPosts={allPosts}
                            />
                        }
                    />
                </Route>
            </Route>
        </Routes>
    );
};
