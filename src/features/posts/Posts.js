import React from "react";
import { PostDetails } from "./PostDetails";
import { PostList } from "./PostList";
export function Posts() {
  return (
    <div>
      <PostList />
      <PostDetails />
    </div>
  );
}
