import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './NewsSiteShow.css';
import $ from 'jquery'

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
  console.log(this.state)
  var articles = this.state.response.map((article, index) => {
    return ( <div className="stuff">
      by: {article.author},
      title: {article.title},
      description: {article.description}
      </div>
    )})
  return (
    <div>
    {articles}
    </div>
  )

}
}
export default NewsSiteShow;
