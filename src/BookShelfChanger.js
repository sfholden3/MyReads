import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookList: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select id="bookStatus" value={this.props.book.shelf} onChange={event => this.props.updateBookList(this.props.book, event)}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
