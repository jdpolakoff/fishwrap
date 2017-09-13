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
              <Link to="/news"><p>Home</p></Link>
            </nav>
          </footer>
      </div>
      )
  }
}

export default Footer;
