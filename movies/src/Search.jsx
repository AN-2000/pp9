import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Showing 9 movies from the database</p>
        <button type="button" class="btn btn-primary mb-4">
          New
        </button>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default Search;
