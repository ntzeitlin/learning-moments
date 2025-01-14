/* eslint-disable react/prop-types */
export const EditProfile = ({
    profileData,
    handleInputChange,
    handleSubmitChanges,
}) => {
    return (
        <section className="post-detail">
            <header className="post-detail-header">Edit Profile</header>
            <form>
                <fieldset>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Cohort:</label>
                        <input
                            type="text"
                            name="cohort"
                            value={profileData.cohort}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <button onClick={handleSubmitChanges}>
                        Submit Changes
                    </button>
                </fieldset>
            </form>
        </section>
    );
};
