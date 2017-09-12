import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './SearchResults.css';
import $ from 'jquery'


class SearchResults extends Component {

constructor(){
  super()
  this.state = {
    query: "",
    response: []
  }
}

render() {
  return (
    <div>
      <p>stuff</p>
    </div>
  );
}
}

// "http://beta.newsapi.org/v2/top-headlines?q=trump&apiKey=2046072022de4210a11c3a47994a1fb7"

export default SearchResults;
