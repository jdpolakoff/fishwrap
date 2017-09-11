import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './mainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="top">
          <Link to="nationalnews"><p>National</p></Link>
        </div>
        <div className="top">
          <p>International</p>
        </div>
        <div className="top">
          <p>Sports</p>
        </div>
      </div>
    );
  }
}

export default MainNav;
