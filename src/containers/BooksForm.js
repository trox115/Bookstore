import React from 'react';

const BookForm = () => {
  const category = ['Action', 'Biography', 'Horror', 'History', 'Kids', 'Learning', 'Sci-fi'];
  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" />
        <br />
      </label>
      <label htmlFor="category">
        Category
        <select id="category" required>
          {category.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
