import axios from 'axios'

const BaseUrl = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default BaseUrl

export const getPosts = async (skip = 0) => {
    const { data } = await BaseUrl.get(`/posts?limit=10&skip=${skip}`)
    return data
}

export const searchPosts = async (query: string, skip = 0) => {
    const { data } = await BaseUrl.get(`/posts/search?q=${encodeURIComponent(query)}&limit=10&skip=${skip}`)
    return data
}

export const getPostsByTag = async (tag: string, skip = 0) => {
    const { data } = await BaseUrl.get(`/posts/tag/${encodeURIComponent(tag)}?limit=10&skip=${skip}`)
    return data
}

export const getPostDetail = async (id: string | string[]) => {
    const { data } = await BaseUrl.get(`/posts/${id}`)
    return data
}
