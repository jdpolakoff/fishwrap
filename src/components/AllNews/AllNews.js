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
import Search from '../Search/Search'
import SearchContainer from '../SearchContainer/SearchContainer'

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
          <Link to={`/sources/${source.id}`}><div className="sources" key={index}><img src="{source.urlsToLogos.small}" />{source.name}</div></Link>
        )
      })
    return(
      <div>
          <div className="homeContainer">
            { allNews }
          </div>
      </div>
      )
  }
}

export default AllNews;
