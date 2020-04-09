import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background: #ffffff;
  margin-top: 25px;
  display: flex;
`;

const BookInfo = styled.div`
  display: block;
  margin-left: 5%;
  margin-top: 7%;
  h3 {
    font-family: RobotoSlab;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.2px;
    color: #121212;
  }
  p {
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: bold;
    color: #121212;
    margin-top: auto;
    margin-bottom: auto;
  }

  h6 {
    font-family: RobotoSlab;
    font-size: 14px;
    font-weight: 300;
    color: #4386bf;
  }
  button {
    background: #ffffff;
    border: none;
    border-right: solid 1px #e8e8e8;
    font-family: RobotoSlab;
    font-size: 14px;
    font-weight: 300;
    color: #4386bf;
    &.first {
      padding-left: 0;
    }
    &.last {
      border: none;
    }
  }
`;

const Oval = styled.div`
  width: 68px;
  height: 68px;
  border-style: solid;
  border-width: 5px;
  border-image-source: linear-gradient(to bottom, #307bbe, #379cf6);
  border-image-slice: 1;
`;
function Book({ book, remove }) {
  const { id, category, name } = book;
  const handleClick = () => {
    remove(book);
  };
  return (
    <Row>
      <Card>
        <Col md="4">
          <BookInfo>
            <p>{category}</p>

            <h3>{name}</h3>
            <h6>
              Book ID(instead of author):
              {id}
            </h6>

            <button
              type="button"
              className="first"
              onClick={() => alert('Not implemented yet')}
            >
              Comments
            </button>
            <button type="button" onClick={handleClick}>
              Remove
            </button>
            <button
              type="button"
              className="last"
              onClick={() => alert('Not implemented yet')}
            >
              Edit
            </button>
          </BookInfo>
        </Col>
        <Oval />
      </Card>
    </Row>
  );
}

// An object taking on a particular shape
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};
export default Book;
