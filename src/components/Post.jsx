/* eslint-disable react/prop-types */
import "./Post.css"

export const Post = ({ postObject }) => {

    const countLikes = () => {
        let count = 0
        if (postObject.userPosts.length) {
            for (const userPostObj of postObject.userPosts) {
                if (userPostObj.liked) {
                    count++
                }
            }
        }
        return count
    }

    return (
        <li className="post">
            <div className="post-info">
                Topic: {postObject.topic.name}
            </div>
            <div className="post-info">
                Title: {postObject.title}
            </div>
            <div className="post-info">
                Likes: {countLikes()}
            </div>
        </li>
    )
}