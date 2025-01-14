import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editUserProfile, getUserById } from "../../services/userService";
import "../posts/Post.css";
import { getPostsByUserId } from "../../services/postService";
import { EditProfile } from "../forms/EditProfile";

export const Profile = ({ currentUser }) => {
    const { userId } = useParams();
    const [profileData, setProfileData] = useState({});
    const [postArray, setPostArray] = useState([]);

    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        getUserById(userId).then((data) => setProfileData(data));
        getPostsByUserId(userId).then((data) => setPostArray(data));
    }, [userId]);

    const handleEdit = () => {
        navigate("edit", { state: { shouldEdit: true } });
    };

    const handleInputChange = (event) => {
        const profileDataCopy = { ...profileData };
        profileDataCopy[event.target.name] = event.target.value;
        setProfileData(profileDataCopy);
    };

    const handleSubmitChanges = (event) => {
        event.preventDefault();

        editUserProfile(profileData).then(
            navigate(`/profile/${currentUser.id}`)
        );
    };

    return state?.shouldEdit ? (
        <EditProfile
            profileData={profileData}
            handleInputChange={handleInputChange}
            handleSubmitChanges={handleSubmitChanges}
        />
    ) : (
        <section className="post-detail">
            <header className="post-detail-header">
                <h1>Name: {profileData.name}</h1>
            </header>
            <div>
                <h2>Cohort: {profileData.cohort}</h2>
                <h2>Email: {profileData.email}</h2>
                <h2>Post Count: {postArray.length}</h2>
            </div>
            <div>
                {currentUser.id === parseInt(userId) ? (
                    <button onClick={handleEdit}>edit</button>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};
