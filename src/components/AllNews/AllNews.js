import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './AllNews.css';

class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      newsCategories:
      [
        {
          type: "general"
        },
        {
          type: "general"
        },{
          type: "general"
        },{
          type: "general"
        },
      ]
    }
  }

  render() {
    let allNews = this.props.allNews.map((source, index) => {
    return (
          <div className="sources" key={index}>{source.name}</div>
        )
      })
      return (
        <div className="homeContainer">
          { allNews }
        </div>
      )
  }
}

export default AllNews;
