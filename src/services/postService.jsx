export const getAllPosts = async () => {
    const response = await fetch("http://localhost:8088/posts?_expand=topic")
    const data = await response.json()
    return data
}

export const getAllUserPosts = async () => {
    const response = await fetch("http://localhost:8088/userPosts")
    const data = await response.json()
    return data
}