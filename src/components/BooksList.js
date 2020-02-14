import React from 'react';
import { useSelector } from 'react-redux';




const BooksList = () => {
  const test = useSelector(state => state.books.title)
  console.log(test);
  return(
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
      </tr>

    </table>
  </div>
);
}


export default BooksList;
