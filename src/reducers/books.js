const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
      return [...state, action.book];
    case 'REMOVE_BOOK': {
      const index = state.filter(book => book !== action.book);

      return index;
    }
    case 'LOAD_BOOKS_SUCCESS': {
      return action.books;
    }
    default:
      return state;
  }
};
export default books;
