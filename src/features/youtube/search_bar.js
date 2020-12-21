import { useState } from "react";

const SearchBar = (props) => {
  const [state, setState] = useState({ term: "" });
  const onInputChange = (term) => {
    setState({ term });
    props.onSearchTermChange(term);
  };
  return (
    <div className="search-bar form-group">
      <label>Search videos</label>
      <input
        className="form-control"
        value={state.term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
