import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends React.Component {
  render() {
    console.log(this.props.books);
    const books = this.props.books.map(book => <Book id={book.id} book={book} />);
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
          {books}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
