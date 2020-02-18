import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const library = books.map(book => <Book id={book.id} book={book} />);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
        </tr>
        {library}
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BookList.PropTypes = {
  books: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(BooksList);
