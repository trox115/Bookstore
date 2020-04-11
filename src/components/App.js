import React from 'react';
import Container from 'react-bootstrap/Container';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <BooksList />
      </Container>
      <Container>
        <BookForm />
      </Container>
    </>
  );
}

export default App;
