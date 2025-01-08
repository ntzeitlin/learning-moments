export const getAllPosts = async () => {
    const response = await fetch("http://localhost:8088/posts")
    const data = await response.json()
    return data
}