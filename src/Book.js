import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger.js';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookList: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }}
          />
          <BookShelfChanger 
            book={this.props.book}
            selectedShelf={this.props.book.shelf}
            updateBookList={this.props.updateBookList}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors.join(', ')}</div>
      </div>
    );
  }
}
export default Book;
