export const getAllPosts = async () => {
    const response = await fetch("http://localhost:8088/posts?_expand=topic&_embed=userLikedPosts")
    const data = await response.json()
    return data
}

export const getPostById = async (postId) => {
    const response = await fetch(`http://localhost:8088/posts/${postId}?_expand=user&_expand=topic&_embed=userLikedPosts`)
    const data = await response.json()
    return data
}