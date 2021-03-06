import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger.js';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookList: PropTypes.func.isRequired
  };
  render() {
    const { book, updateBookList } = this.props;
    return (
      <div className="book">
        <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${book.imageLinks && book.imageLinks.thumbnail?`${book.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})`
              }}
            />
          <BookShelfChanger book={book} selectedShelf={book.shelf} updateBookList={updateBookList} />
        </div>
        <div className="book-title">{book.title}</div>
        {!(typeof book.authors === 'undefined') && <div className="book-authors">{book.authors.join(', ')}</div>}
      </div>
    );
  }
}
export default Book;
