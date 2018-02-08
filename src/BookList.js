import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf.js';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };
  componentWillReceiveProps(props) {
    this.setState({
      currentlyReading: props.books.filter(cr => cr.shelf == 'currentlyReading'),
      wantToRead: props.books.filter(cr => cr.shelf == 'wantToRead'),
      read: props.books.filter(cr => cr.shelf == 'read')
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf shelfBookList={this.state.currentlyReading} shelfName="Currently Reading" />
            <Bookshelf shelfBookList={this.state.wantToRead} shelfName="Want to Read" />
            <Bookshelf shelfBookList={this.state.read} shelfName="Read" />
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
