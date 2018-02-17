import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks.js';
import BookList from './BookList.js';
import { Route, Link } from 'react-router-dom';
let books;
class BooksApp extends Component {
  state = {
    books: [],
    shelfList: [
      {Name:'Currently Reading', Id: "currentlyReading"}, 
      {Name: 'Want to Read', Id: "wantToRead"},
      {Name: 'Read', Id: "read"}
    ]
  };

  componentDidMount() {
    this.getAllBooks();
  }

  updateBookList = (book, event) => {
    event.preventDefault();
    BooksAPI.update(book, event.target.value);
    this.getAllBooks();
  };

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchBooks />} />
        <Route
          exact
          path="/"
          render={() => (
            <BookList books={this.state.books} shelfList={this.state.shelfList} updateBookList={this.updateBookList} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
