import React from 'react';
import { useSelector } from 'react-redux';



const BooksList = () => {
  const library = useSelector(state => state.books);
  const books = [];
  library.forEach(book =>
    books.push(<tr><td>{book.id}</td><td>{book.title}</td><td>{book.category}</td></tr>)
  )
  return(
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
      </tr>
          {books}
    </table>
  </div>
);
}


export default BooksList;
