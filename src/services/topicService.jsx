export const getAllTopics = async () => {
    const response = await fetch("http://localhost:8088/topics")
    const data = await response.json()
    return data
}