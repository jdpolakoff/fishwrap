import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './Footer.css';

class Footer extends Component {

  render() {
    return(
      <div>
          <footer className="footerContainer">
              <div>
              <Link to="/news"><p> Home </p></Link>
              </div>
              <div>
              <Link to="/about"><p> About </p></Link>
              </div>
              <div>
              <Link to="https://newsapi.org/" target="_blank"><p> Powered by News API </p></Link>
              </div>
          </footer>
      </div>
      )
  }
}

export default Footer;
