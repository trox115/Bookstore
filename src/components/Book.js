import React from 'react';

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

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
};
export default Book;
