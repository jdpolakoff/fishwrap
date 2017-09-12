import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './SearchContainer.css';
import $ from 'jquery';
import SearchResults from '../SearchResults/SearchResults'
import Search from '../Search/Search'


class SearchContainer extends Component {
  constructor(){
    super()
    this.state = {
      hasSearched: false,
      query: "",
      articles: []
    }
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(e) {
    this.setState( {query: e.target.value}, () => {
      console.log(this.state.query)
      console.log(this.state)
    })
  }

  onSubmitQuery(e) {
    e.preventDefault()
    this.setState({
      hasSearched: true}, () => {
        console.log(this.state.hasSearched)
        this.props.history.push(`/search/${this.state.query}`)
      }
    )
  }

  render() {
    const toRender = this.state.hasSearched
    ? <SearchResults query={this.state.query} />
    : <Search query={this.state.query} handleSearchInput={this.handleSearchInput} onSubmitQuery={this.onSubmitQuery} />
    return <div>{toRender}</div>
  }
}

export default SearchContainer;
