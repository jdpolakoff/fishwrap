import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './NewsCategories.css';

class NewsCategories extends Component {
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
    let newsCategories = this.state.newsCategories.map((category, index) => {
      return (
            <div className="categories" key={index}><Link to={`/${category.type}`}>{category.name}</Link></div>
        )
        })

    return(
      <div>
          <header className="headerContainer">
            { newsCategories }
          </header>
      </div>
      )
  }
}

export default NewsCategories;
