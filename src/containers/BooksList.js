import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { remove } from '../actions';

class BooksList extends React.Component {
  render() {
    const books = this.props.books;
    const library = books.map(book => (
      <Book
        key={book.name}
        id={book.id}
        book={book}
        remove={this.props.remove}
      />
    ));
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th> Remove </th>
          </tr>
          {library}
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { remove })(BooksList);
