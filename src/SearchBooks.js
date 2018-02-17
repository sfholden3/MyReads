import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  static propTypes = {
    updateBookList: PropTypes.func.isRequired
  };
  state = {
    searchedBooks: []
  };
  getSearchedBooks = query => {
    BooksAPI.search(query).then(searchedBooks => {
      this.setState({ searchedBooks });
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
        {(searchedBooks !== null) &&
        <div className="search-books-results">
          <ol className="books-grid">            
              {searchedBooks.map(b => (
                <li key={b.id}>
                  <Book key={b.id} book={b} updateBookList={updateBookList} />
                </li>
              ))
              }
          </ol>
          
        </div>
        }
      </div>
    )
  }
}

export default SearchBooks;
