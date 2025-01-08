import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../services/postService"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(postArray => setAllPosts(postArray))
    }, [])

    return <div>
        <ul>
            {
                allPosts.map(
                    (postObject) => {
                        return <li key={postObject.id}>
                            <div>
                                Topic: {postObject.topic.name}
                            </div>
                            <div>
                                Title: {postObject.title}
                            </div>
                            <div>
                                Likes: {

                                }
                            </div>
                        </li>
                    }
                )
            }
        </ul>
    </div>
}