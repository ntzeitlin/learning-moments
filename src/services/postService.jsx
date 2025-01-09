export const getAllPosts = async () => {
    const response = await fetch("http://localhost:8088/posts?_expand=topic&_embed=userLikedPosts")
    const data = await response.json()
    return data
}

