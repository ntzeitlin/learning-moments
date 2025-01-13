import { Link } from "react-router-dom"
import "./NavBar.css"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/" className="navbar-link">All Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myposts" className="navbar-link">My Posts</Link>
            </li>
            <li className="navbar-item">
                <Link to="/newpost" className="navbar-link">New Post</Link>
            </li>
            {localStorage.getItem("learning_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        to=""
                        className="navbar-link"
                        onClick={() => {
                            localStorage.removeItem("learning_user")
                            navigate("/login", { replace: true })
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}
