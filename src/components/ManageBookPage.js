import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { loadBooks, update } from '../actions';
import BookForm from '../containers/common/BookForm';

function ManageBookPage({ loadBooks, history, update, ...props }) {
  const [book, setBook] = useState({ ...props.books });
  const [error, setErrors] = useState({});
  
  useEffect(() => {
    if (book.length === 0) {
      loadBooks().catch(error => {
        alert('Loading Books failed' + error);
      });
    } else {
      setBook({ ...props.books });
    }
  }, [props.books]);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSave(event) {
    event.preventDefault();
    update(book).then(() => {
      history.push('/');
    });
  }
  return (
    <Container>
      <BookForm
        book={book}
        errors={error}
        authors={book.author}
        onChange={handleChange}
        onSave={handleSave}
      />
    </Container>
  );
}

export function getBookBySlug(books, slug) {
  return books.find(book => book.id === parseInt(slug));
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  return {
    books: getBookBySlug(state.books, slug),
  };
}

const mapDispatchToProps = {
  loadBooks,
  update,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
