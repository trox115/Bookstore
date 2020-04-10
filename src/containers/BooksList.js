import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Book from '../components/Book';
import FilterCategory from '../components/FilterCategory';
import * as bookActions from '../actions';
import { bindActionCreators } from 'redux';

const Header = styled.header`
  background: #ffffff;
  width: 100%;
  height: 95px;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);

  border-bottom: solid 1px #e8e8e8;

  .cont {
    line-height: 95px;
    display: flex;
    align-items: center;
    h1 {
      width: 240px;
      height: 37px;
      font-family: Montserrat, 'sans-serif';
      font-size: 30px;
      font-weight: bold;
      color: #0290ff;
      margin-left: -14px;
    }
    p {
      font-size: 16px;
      color: #121212;
      letter-spacing: 1.9px;
      margin-left: 3%;
    }
    select {
      font-size: 13px;
      opacity: 0.5;
      background: #ffffff;
      color: #121212;
      letter-spacing: 1.9px;
      border: none;
      margin-left: 3%;
      margin-bottom: 15px;

      option {
        color: #0290ff;
      }
    }
  }
`;

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };
  }

  handleFilter = event => {
    const { filterChange } = this.props.actions;
    this.setState({
      filter: event.target.value,
    });

    filterChange(this.state);
  };

  componentDidMount() {
    this.props.actions.loadBooks().catch(error => {
      alert('algo falhou ' + error);
    });
  }

  render() {
    const { books } = this.props;
    const { remove } = this.props.actions;
    const { filter } = this.state;
    let library = [];
    if (filter === 'All') {
      library = books.map(book => (
        <Book key={book.name} id={book.id} book={book} remove={remove} />
      ));
    } else {
      const auxiliar = books.filter(book => book.category === filter);
      library = auxiliar.map(book => (
        <Book key={book.name} id={book.id} book={book} remove={remove} />
      ));
    }
    return (
      <>
        <Header>
          <Container className="cont">
            <h1 className="logo">Bookstore CMS</h1>
            <p>Books</p>
            <FilterCategory handleFilter={this.handleFilter} />
          </Container>
        </Header>
        <Container>{library}</Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  // filterChange: filter => dispatch(filterChange(filter)),
  // remove: books => dispatch(remove(books)),
  actions: bindActionCreators(bookActions, dispatch),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
