import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { loadBooks, update } from '../actions';

function ManageCompletion({ loadBooks, history, update, ...props }) {
  const [book, setBook] = useState({ ...props.books });

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

  function handleSubmit(event) {
    event.preventDefault();
    update(book).then(() => {
      history.push('/');
    });
  }

  return (
    <Container>
      <Row>
        <Col md="12">
          <h2>Please update the book progress</h2>
        </Col>
        <Col md="6">
          <form onSubmit={handleSubmit}>
            <label for="progress">Progress</label>

            <input
              type="Number"
              name="progress"
              min="0"
              max="100"
              onChange={handleChange}
            />
            <label for="chapter">Chapter</label>
            <input
              type="Number"
              name="chapter"
              min="0"
              max="100"
              onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button type="submit" className="btn btn-primary">
              Update Progress
            </Button>
          </form>
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompletion);
