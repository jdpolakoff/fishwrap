import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './SearchResults.css';
import $ from 'jquery'
import SearchContainer from '../SearchContainer/SearchContainer'
import ReactSiema from 'react-siema'


class SearchResults extends Component {

constructor(){
  super()
  this.state = {
    response: []
  }
}

componentDidMount(){
  console.log(this.props)
  const domain = "http://beta.newsapi.org/v2/"
  let query = this.props.match.params.query
  const endpoint = `top-headlines?q=${query}`
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
    <div className="stuff2Contain">
      <header>
        <h2>Top Headlines About {this.props.match.params.query}</h2>
      </header>
    <ReactSiema ref={(siema) => this.siema = siema}>
        {this.state.response.map((article, index) => {
          console.log(article)
      return (
        <div>
          <div key={index} className="stuff2">
            <img src={article.urlToImage} />
            <h1>{article.title.toUpperCase()}</h1>
            <h2>{article.source.name}</h2>
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

export default SearchResults;
