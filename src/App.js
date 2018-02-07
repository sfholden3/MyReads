import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import BookList from './BookList.js'
import { Route, Link } from 'react-router-dom'
let books;
class BooksApp extends Component {
  
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={ () => (
          <SearchBooks />
        )}/> 
         <Route exact path="/" render={ () => (
           <BookList 
            books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
