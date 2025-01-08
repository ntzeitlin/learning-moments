/* eslint-disable react/prop-types */
import { useState } from "react"

export const Post = ({ postObject }) => {
    const [likeTotal, setLikeTotal] = useState(0)

    return (
        <li>
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
    )
}