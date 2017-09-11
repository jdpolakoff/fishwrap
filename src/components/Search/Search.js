import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="searchForm">
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
