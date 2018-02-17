import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf.js';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfList: PropTypes.array.isRequired,
    updateBookList: PropTypes.func.isRequired
  };


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelfList.map(shelf => (
              <Bookshelf
                key={shelf.Id}
                shelfBookList={this.props.books.filter(cr => cr.shelf === shelf.Id)}
                shelfName={shelf.Name}
                updateBookList={this.props.updateBookList}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
