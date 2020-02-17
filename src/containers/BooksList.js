import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';


const BooksList = () => {
  const library = useSelector(state => state.books);
  const books = [];
  library.forEach(book => books.push(<Book
    id={book.id}
    name={book.title}
    category={book.category}
  />));
  return (
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
};


export default BooksList;
