import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';
import _ from 'lodash';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookList: PropTypes.func.isRequired
  };
  state = {
    searchedBooks: []
  };
  getSearchedBooks = query => {
    let searchResults = BooksAPI.search(query);
    searchResults.then(searchedBooks => {
      this.setState({
        searchedBooks: searchedBooks.length > 0 ? searchedBooks.map(book => 
          Object.assign({}, book, this.props.books.filter(b => b.id === book.id)[0]))
          : searchedBooks.items
      });
    });
  };
  updateQuery = query => {
    if (query) {
      this.getSearchedBooks(query);
    }
  };
  render() {
    const { updateBookList } = this.props;
    const { searchedBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        {searchedBooks !== null && (
          <div className="search-books-results">
            <ol className="books-grid">
              {searchedBooks.map(b => (
                <li key={b.id}>
                  <Book key={b.id} book={b} updateBookList={updateBookList} />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;
