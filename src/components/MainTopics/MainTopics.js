import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './MainTopics.css';
import $ from 'jquery';

class MainTopics extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="topic">
      <h1>Today's News</h1>
      <div className="topicContainer">
        <Link to="/search/Trump">
        <div className="mainTopic">
          <h3>Trump</h3>
          <div className="img">
          <img src="https://timedotcom.files.wordpress.com/2017/08/donald-trump1.jpg?quality=85" />
          </div>
        </div>
        </Link>
        <Link to="/search/Irma">
        <div className="mainTopic">
          <h3>Hurricane Irma</h3>
          <div className="img">
          <img src="http://a.abcnews.com/images/Technology/irma-hurricane-puerto-rico-02-rtr-jc-170906_4x3_992.jpg" />
          </div>
        </div>
        </Link>
        <Link to="/Colin Kaepernick">
        <div className="mainTopic">
          <h3>Colin Kaepernick</h3>
          <div className="img">
          <img src="https://espntheundefeated.files.wordpress.com/2017/06/gettyimages-637007930.jpg?w=3000&h=1406&crop=1&quality=70&strip=info" />
          </div>
        </div>
        </Link>
        <Link to="/search/healthcare">
        <div className="mainTopic">
          <h3>Healthcare</h3>
          <div className="img">
          <img src="https://media.newyorker.com/photos/590973982179605b11ad7ee3/master/w_727,c_limit/Surowiecki-Bernie-Sanders-Healthcare.jpg" />
          </div>
        </div>
        </Link>
        <Link to="/search/Russia">
        <div className="mainTopic">
          <h3>Russia</h3>
          <div className="img">
          <img src="http://i.telegraph.co.uk/multimedia/archive/03463/putin_3463140k.jpg" />
          </div>
        </div>
        </Link>  <Link to="/search/iPhone">
          <div className="mainTopic">
            <h3>iPhone 8</h3>
            <div className="img">
            <img src="https://pmcvariety.files.wordpress.com/2017/09/iphone-ten.png?w=670&h=377&crop=1" />
            </div>
          </div>
          </Link>
      </div>
      </div>
    )
  }
}

export default MainTopics;
