// src/services/api.js
import axios from 'axios';

const API_URL = 'http://your-backend-url.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = (userData) => axiosInstance.post('/user/signUp', userData);
export const login = (userData) => axiosInstance.post('/user/login', userData);
export const logout = (userData) => axiosInstance.post('/user/logout', userData);
export const getUsers = (token) =>
  axiosInstance.get('/user/users', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
export const getPosts = () => axiosInstance.get('/user/chat/post');
export const createPost = (postData, token) =>
  axiosInstance.post('/user/chat/post', postData, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
export const getPostById = (postId) => axiosInstance.get(`/user/chat/post/${postId}`);
export const updatePost = (postId, postData, token) =>
  axiosInstance.put(`/user/chat/post/${postId}`, postData, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
export const deletePost = (postId, token) =>
  axiosInstance.delete(`/user/chat/post/${postId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
