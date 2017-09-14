import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './About.css';
import Img from './kayla-velasquez-199343.jpg'

class About extends Component {

  render() {
    return(
      <div className="aboutimg">
        <h3>About Fishwrap</h3>
        <p>Fishwrap is a news briefing application that pulls headlines from hundreds of news sources globally. Users can read headlines on the day's biggest topics by searching from the homepage, selecting a news site of their choice, or browsing one of several news categories. This site proudly chooses to not display stories published by Breitbart News.</p>
      <div>
        <img src={Img} />
      </div>
      </div>
      )
  }
}

export default About;
