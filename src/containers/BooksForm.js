import React from 'react';

const BookForm = () => (
  <form>
    <label htmlFor="title">
      Title
      <input type="text" name="title" id="title" />
      <br />
    </label>
    <label htmlFor="category">
      Category
      <select id="category" name="category">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="Horror">Horror</option>
        <option value="History">History</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-fi">Sci-Fi</option>
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
);
export default BookForm;
