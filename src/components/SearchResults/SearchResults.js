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
  var articles = this.state.response.map((article, index) => {
    console.log(article)
    return ( <div key={index} className="stuff">
      <img src={article.urlToImage} />
      <h4>{article.title.toUpperCase()}</h4>
      <p>{article.source.name}</p>
      <p><i>{article.author}</i></p>
      <p>{article.description}</p>
      <a href={article.url} target="_blank"><p><i>Full story</i></p></a>
      <p>{article.publishedAt}</p>
      </div>
    )})
  return (
    <div>
      <header><h2>Top Headlines About {this.props.match.params.query}</h2></header>
    <div>
      {articles}
    </div>
    </div>
  )

}
}

export default SearchResults;
