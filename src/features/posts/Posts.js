import React from "react";
import { NewPost } from "./NewPost";
import { PostDetails } from "./PostDetails";
import { PostList } from "./PostList";
export function Posts() {
  return (
    <div>
      <PostList />
      <PostDetails />
      <NewPost />
    </div>
  );
}
