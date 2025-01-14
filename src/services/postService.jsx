// GETTERS:

export const getAllPosts = async () => {
    const response = await fetch(
        "http://localhost:8088/posts?_expand=topic&_embed=userLikedPosts"
    );
    const data = await response.json();
    return data;
};

export const getPostById = async (postId) => {
    const response = await fetch(
        `http://localhost:8088/posts/${postId}?_expand=user&_expand=topic&_embed=userLikedPosts`
    );
    const data = await response.json();
    return data;
};

export const getLikedPostsByUserId = async (userId) => {
    const response = await fetch(
        `http://localhost:8088/userLikedPosts?userId=${userId}&_expand=post`
    );
    const data = response.json();
    return data;
};

export const getPostsByUserId = async (userId) => {
    const response = await fetch(
        `http://localhost:8088/posts?userId=${userId}`
    );
    const data = await response.json();
    return data;
};

// SETTERS:

export const createNewPost = async (postObject) => {
    return await fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postObject),
    });
};

export const deletePost = async (postId) => {
    const response = await fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
    });
    const data = response.json();
    return data;
};

export const editPost = async (postObject, id) => {
    const response = await fetch(`http://localhost:8088/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postObject),
    });
    const data = response.json();
    return data;
};

export const removeFavorite = async (postId) => {
    return await fetch(`http://localhost:8088/userLikedPosts/${postId}`, {
        method: "DELETE",
    });
};
