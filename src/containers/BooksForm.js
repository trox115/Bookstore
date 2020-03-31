import React from 'react';
import { connect } from 'react-redux';
import * as bookactions from '../actions';
import PropTypes from 'prop-types';

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

const initialState = {
  title: '',
  category: 'Action',
  id: randomNumber(),
};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(bookactions.create(this.state));
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title } = this.state;
    const category = ['Action', 'Biography', 'Horror', 'History', 'Kids', 'Learning', 'Sci-fi'];
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
          <select name="category" id="category" required onChange={this.handleChange}>
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
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(
  mapStateToProps,
  //mapDispatchToProps,
)(BookForm);
