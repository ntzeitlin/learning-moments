export const submitLikedPost = async (postObject) => {
    return await fetch(`http://localhost:8088/userLikedPosts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObject)
    })
}