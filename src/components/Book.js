import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../auxiliar/overidesvg.css';
import { Alert } from 'react-bootstrap';

const Card = styled.div`
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background: #ffffff;
  margin-top: 25px;
  min-height: 170px;

  .full {
    min-height: 170px;
  }
`;

const UpdateInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .infobut {
    display: block;
    line-height: 1px;

    h6 {
      width: 126px;
      height: 18px;
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 13px;
      letter-spacing: normal;
      color: #121212;
    }

    p {
      font-family: RobotoSlab;
      font-size: 16px;

      letter-spacing: -0.4px;
      color: #121212;
    }

    button {
      border-radius: 3px;
      width: 184px;
      height: 33px;
      background-color: #0290ff;
      border: none;
      font-family: RobotoSlab;
      font-size: 13px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.5px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

const ProgressInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text {
    display: none;
  }

  p {
    font-family: Montserrat;
    font-size: 32px;
    color: #121212;
    margin-top: 12%;
  }

  .wrap {
    line-height: 1px;
    margin-left: 4px;
    width: 100%;
    height: 70px;
    border-right: solid 1px #e8e8e8;

    h6 {
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 14px;
      color: #121212;
    }
  }
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
  path .CircularProgressbar-path {
    width: 68px;
    height: 68px;
  }
`;

function Book({ book, remove }) {
  const { id, category, name } = book;
  const handleClick = () => {
    remove(book);
  };
  const customalert = () => {
    alert('Not implemented yet');
  };
  return (
    <Row className="align-items-center">
      <Card className="col-12">
        <Row className="align-items-center full">
          <Col md="6" lg="6" sm="8" className="col-6 align-self-center">
            <BookInfo>
              <p>{category}</p>

              <h3>{name}</h3>
              <h6>
                Book ID(instead of author):
                {id}
              </h6>

              <button type="button" className="first" onClick={customalert}>
                Comments
              </button>
              <button type="button" onClick={handleClick}>
                Remove
              </button>
              <button type="button" className="last" onClick={customalert}>
                Edit
              </button>
            </BookInfo>
          </Col>
          <Col md="6" lg="3" xl="3" sm="4" className="col-6 align-self-center">
            <ProgressInfo>
              <CircularProgressbar
                value={id}
                text={`${id}%`}
                viewBox="0 0 300 300"
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${id / 100})`,
                  trailColor: '#d6d6d6',
                  backgroundColor:
                    'linear-gradient(to bottom, #307bbe, #379cf6);',
                })}
              />
              <div className="wrap">
                <p> 
                  {id}%
                  </p>
                <h6>Completed</h6>
              </div>
            </ProgressInfo>
          </Col>
          <Col md="12" lg="2" xl="2" sm="12">
            <UpdateInfo>
              <div className="infobut">
                <h6>Current Chapter</h6>
                <p>
                  Chapter: 
                  {id}
                  </p>
                <button type="button" onClick={customalert}>
                  Update Progress
                </button>
              </div>
            </UpdateInfo>
          </Col>
        </Row>
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
