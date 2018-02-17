import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class Bookshelf extends Component {
  static propTypes = {
    shelfBookList: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    updateBookList: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfBookList.map(b => (
              <li key={b.id}>
                <Book book={b} updateBookList={this.props.updateBookList} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
