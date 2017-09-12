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
            <nav>
              <p>Home</p>
            </nav>
          </footer>
      </div>
      )
  }
}

export default Footer;
