import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, remove }) {
  const { id, category, name } = book;
  const handleClick = () => {
    remove(book);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <button type='button' onClick={handleClick}>
          Remove Book
        </button>
      </td>
    </tr>
  );
}

// An object taking on a particular shape
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
export default Book;
