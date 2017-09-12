import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './CategoryShow.css';
import NewsCategories from '../NewsCategories/NewsCategories'

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
            <div className="innerSources">
              <img src={`${source.urlsToLogos.small}`} /><br />
              {source.name}
            </div>
          </div>
          </Link>
        )
      })
    return (
      <div>
      <div className="topNav">
        <NewsCategories />
      </div>
      <header>
        <h2>Your top {this.props.match.params.category} news sources:</h2>
      </header>
      <div className="homeContainer">
        { results }
      </div>
      </div>
        )
  }
}

export default CategoryShow;
