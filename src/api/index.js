import axios from 'axios';

const url = "http://localhost:5000/";

export const fetchPosts = () => axios.get(`${url}posts`);
export const createPost = (post) => axios.post(`${url}posts`, post);
export const updatePost = (id, updatedPost) => axios.patch(`${url}posts/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}posts/${id}`)