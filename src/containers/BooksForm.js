import React from 'react';

const BookForm = () => (
  <form>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" />
    <br />
    <label htmlFor="category">Category</label>
    <select id="category">
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="Horror">Horror</option>
      <option value="History">History</option>
      <option value="Kids">Kids</option>
      <option value="Learning">Learning</option>
      <option value="Sci-fi">Sci-Fi</option>
    </select>
    <button type="submit">Submit</button>
  </form>
);
export default BookForm;
