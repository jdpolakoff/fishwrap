import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './NewsSiteShow.css';
import $ from 'jquery'
import ReactSiema from 'react-siema'


class NewsSiteShow extends Component {
  constructor() {
    super()
    this.state = {
      selectedSite: {},
      apiSite: {},
      response: []
  }
  this.setState = this.setState.bind(this)
}

  componentWillMount(){
    let site = this.props.match.params.source
    let selectedSite = this.props.allNews.find((source) => {
      return source.id === site
    })
    console.log(selectedSite)
    this.setState({
      selectedSite: selectedSite
    })
  }

  componentDidMount(){
    const domain = "http://beta.newsapi.org/v2/"
    let current = this.state.selectedSite.id
    const endpoint = `top-headlines?sources=${current}`
    const apiKey = `&apiKey=2046072022de4210a11c3a47994a1fb7`

    let url = `${domain}${endpoint}${apiKey}`
    console.log(url)
    $.ajax({
      url,
      method: 'GET',
      dataType: 'json'
    }).then((response) => {
      console.log(Object.values(response))
      this.setState({ response: response.articles })
    })
  }

render() {
  return(
    <div className="stuffContain">
      <header>
        <h2>Top Headlines From {this.state.selectedSite.name}</h2>
      </header>
    <ReactSiema ref={(siema) => this.siema = siema}>
        {this.state.response.map((article, index) => {
      return (
      <div>
        <div key={index} className="stuff">
        <img src={article.urlToImage} />
        <h4>{article.title.toUpperCase()}</h4>
        <p><i>{article.author}</i></p>
        <p>{article.description}</p>
        <a href={article.url} target="_blank"><p><i>Full story</i></p></a>
        <p>{article.publishedAt}</p>
        <button onClick={() => this.siema.prev()}>Previous story</button>
        <button onClick={() => this.siema.next()}>Next story</button>
        </div>
      </div>
        )}
      )}
    </ReactSiema>
  </div>
    )
  }
}

export default NewsSiteShow;
