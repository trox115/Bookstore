import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const { id, category, name } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
    </tr>
  );
}

// An object taking on a particular shape
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.integer,
    name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
export default Book;
