import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cat from '../category';
import * as bookactions from '../actions';

const Formul = styled.form`
  width: 100%;
  margin-top: 25px;
  border-top: solid 1px #e8e8e8;
  margin-bottom: 100px;
  h2 {
    margin-top: 25px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: bold;

    letter-spacing: -0.18px;
    color: #888888;
  }

  input,
  select {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: #c4c4c4;
  }
  button {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    border: none;
    background-color: #0290ff;
    font-family: RobotoSlab;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    text-align: center;
    color: #ffffff;
  }
`;

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
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { create } = this.props;
    const { title } = this.state;
    if (title === '') {
      return false;
    }
    create(this.state).catch(error => error);
    return true;
  };

  render() {
    const category = cat;
    const { value } = this.state;
    return (
      <Formul onSubmit={this.handleSubmit}>
        <Row>
          <Col md="12" className="first">
            <h2>Add a new Book</h2>
          </Col>

          <Col md="6">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Book title"
              value={value}
              onChange={this.handleChange}
            />
          </Col>
          <Col md="4">
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
          </Col>
          <Col md="2">
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </Formul>
    );
  }
}

BookForm.propTypes = {
  create: PropTypes.func.isRequired,
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
