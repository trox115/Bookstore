import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as bookactions from '../actions';

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

const initialState = {
  name: '',
  category: 'Action',
  id: randomNumber(),
};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: randomNumber(),
    });
    this.props.create(this.state);
  }

  render() {
    const category = [
      'Action',
      'Biography',
      'Horror',
      'History',
      'Kids',
      'Learning',
      'Sci-fi',
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="name"
            id="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label htmlFor="category">
          Category
          <select
            name="category"
            id="category"
            required
            onChange={this.handleChange}
          >
            {category.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  create: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: book => dispatch(bookactions.create(book)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
