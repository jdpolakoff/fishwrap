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

export default Search;
