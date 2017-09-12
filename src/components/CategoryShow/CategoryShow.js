import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './CategoryShow.css';

class CategoryShow extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    let filteredSources = this.props.allNews.filter((source) => {
      return source.category === this.props.match.params.category
    })
    console.log(filteredSources)
    let results = filteredSources.map((source, index) => {
    return (
          <Link to={`/sources/${source.id}`}>
          <div className="sources" key={index}>
          <img src={`${source.urlsToLogos.small}`} /><br />
          {source.name}
          </div>
          </Link>
        )
      })
    return (
      <div className="homeContainer">
        { results }
      </div>
        )
  }
}

export default CategoryShow;
