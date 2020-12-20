import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostsAsync,
  deletePostAsync,
  selectPosts,
  getPostDetailsAsync,
} from "./postsSlice";
export function PostList(props) {
  const dispatch = useDispatch();

  const data = useSelector(selectPosts);
  const { posts } = data;

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [props, dispatch]);
  const handleDelete = (id) => {
    dispatch(deletePostAsync(id));
  };
  const handleGetDetails = (id) => {
    dispatch(getPostDetailsAsync(id));
  };
  const renderPosts = (posts = []) => {
    return posts.map((post) => {
      return (
        <li className="list-group-item row" key={post.id}>
          <span className="col-3">{post.title}</span>
          <div className="col-3">
            <button onClick={() => handleDelete(post.id)}> Delete</button>
            <button onClick={() => handleGetDetails(post.id)}>
              {" "}
              Get Details
            </button>
          </div>
        </li>
      );
    });
  };
  return (
    <div>
      <h3>Posts</h3>
      <ul className="list-group">{renderPosts(posts)}</ul>
    </div>
  );
}
