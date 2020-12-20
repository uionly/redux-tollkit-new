import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=HyperSpriteAPIk3y";
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: { posts: [], postDetail: {} },
  },
  reducers: {
    fetchPosts: (state, action) => {
      state.value.posts = JSON.parse(action.payload);
    },
    getPostDetails: (state, action) => {
      state.value.postDetail = JSON.parse(action.payload);
    },
  },
});

export const { fetchPosts, getPostDetails } = postsSlice.actions;

export const fetchPostsAsync = () => (dispatch) => {
  axios.get(`${ROOT_URL}/posts/${API_KEY}`).then((res) => {
    dispatch(fetchPosts(JSON.stringify(res.data)));
  });
};
export const createPostAsync = (post) => (dispatch) => {
  axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then((res) => {
    console.log("Success-->", JSON.stringify(res.data));
    dispatch(fetchPostsAsync());
  });
};
export const deletePostAsync = (id) => (dispatch) => {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((res) => {
    console.log("Success-->", JSON.stringify(res.data));
    dispatch(fetchPostsAsync());
  });
};

export const getPostDetailsAsync = (id) => (dispatch) => {
  axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((res) => {
    console.log("Success-->", JSON.stringify(res.data));
    dispatch(getPostDetails(JSON.stringify(res.data)));
  });
};

export const selectPosts = (state) => state.posts.value;

export default postsSlice.reducer;
