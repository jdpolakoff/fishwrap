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
        <h3>Or, search real-time headlines from outlets including The New York Times, Washington Post and dozens more:</h3>
        <form onSubmit={this.props.onSubmitQuery}>
            <input type="text" onChange={this.props.handleSearchInput} />
            <br />
            <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
