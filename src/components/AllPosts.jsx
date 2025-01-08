import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../services/postService"
import { Post } from "./Post"

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
                        return <Post postObject={postObject} key={postObject.id} />
                    }
                )
            }
        </ul>
    </div>
}