import { selectPosts } from "./postsSlice";
import { useSelector } from "react-redux";
export function PostDetails() {
  const data = useSelector(selectPosts);
  const { postDetail } = data;

  return (
    <div className="row">
      <strong>Details:</strong>
      <p className="col">Title: {postDetail.title}</p>
      <p className="col">Categories: {postDetail.categories}</p>
      <p className="col"> Content: {postDetail.content}</p>
    </div>
  );
}
