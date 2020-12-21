import _ from "lodash";
import { useState, useEffect } from "react";
import "./youtube.css";
import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
const API_KEY = "AIzaSyD-9o75POVPzPr4CFcYGZCyzdEddTeBCGI";

export const Youtube = (props) => {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
  });
  useEffect(() => {
    videoSearch("ES6 Videos");
  }, [props]);
  const videoSearch = _.debounce((term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }, 300);

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={state.selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo) => setState({ selectedVideo })}
        videos={state.videos}
      />
    </div>
  );
};
