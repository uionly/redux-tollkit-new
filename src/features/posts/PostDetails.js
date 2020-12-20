import { selectPosts } from "./postsSlice";
import { useSelector } from "react-redux";
export function PostDetails() {
  const data = useSelector(selectPosts);
  const { postDetail } = data;
  if (!postDetail) {
    return null;
  }
  return (
    <div>
      <h3>{postDetail.title}</h3>
      <h6>Categories: {postDetail.categories}</h6>
      <p>{postDetail.content}</p>
    </div>
  );
}
