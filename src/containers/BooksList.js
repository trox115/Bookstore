import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import FilterCategory from '../components/FilterCategory';
import { remove, filterChange } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };
  }

  handleFilter = event => {
    const { filterChange } = this.props;
    this.setState({
      filter: event.target.value,
    });
    filterChange(this.state);
  };

  render() {
    const { books, remove } = this.props;
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
      <div>
        <FilterCategory handleFilter={this.handleFilter} />
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterChange: filter => dispatch(filterChange(filter)),
  remove: books => dispatch(remove(books)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
