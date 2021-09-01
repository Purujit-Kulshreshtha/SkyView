import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})


export const fetchPosts = () => axios.get(`/posts`);
export const createPost = (post) => axios.post(`/posts`, post);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`/posts/${id}`)

export const signIn = (data) => API.post("/user/singnin", data)