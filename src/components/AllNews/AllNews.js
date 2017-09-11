import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './AllNews.css';
import NewsCategories from '../NewsCategories/NewsCategories'

class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      newsCategories:
      [
        {
          type: "general",
          name: "General News and Politics"
        },
        {
          type: "business",
          name: "Business"
        },
        {
          type: "sport",
          name: "Sports"
        },
        {
          type: "science-and-nature",
          name: "Science and Nature"
        },
        {
          type: "technology",
          name: "Technology"
        },
        {
          type: "entertainment",
          name: "Entertainment"
        },
        {
          type: "music",
          name: "Music"
        },
      ]
    }
  }

  render() {
    let allNews = this.props.allNews.map((source, index) => {
    return (
          <div className="sources" key={index}><Link to={`/sources/${source.id}`}>{source.name}</Link></div>
        )
      })
    return(
      <div>
          <NewsCategories />
          <div className="homeContainer">
            { allNews }
          </div>
      </div>
      )
  }
}

export default AllNews;
