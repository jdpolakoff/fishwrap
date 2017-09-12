import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './Search.css';
import $ from 'jquery';
import SearchResults from '../SearchResults/SearchResults'


class Search extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="searchForm">
        <form onSubmit={this.props.onSubmitQuery}>
          <input type="text" placeholder="search" onChange={this.props.handleSearchInput} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

// "http://beta.newsapi.org/v2/top-headlines?q=trump&apiKey=2046072022de4210a11c3a47994a1fb7"

export default Search;
