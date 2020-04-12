import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';
import ManageBookPage from './ManageBookPage';
import ManageCompletion from './ManageCompletion';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/book/:slug" component={ManageBookPage} />
          <Route path="/progress/:slug" component={ManageCompletion} />
          <Container fluid className="p-0">
            <BooksList />

            <BookForm />
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
