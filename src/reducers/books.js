const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
      return [...state, action.book];
    case 'DELETE_BOOKS_OPTIMISTIC': {
      return state.filter(books => books.id !== action.books.id);
    }
    case 'LOAD_BOOKS_SUCCESS': {
      return action.books;
    }
    case 'UPDATE_BOOKS_SUCCESS': {
      return state.map(book =>
        book.id === action.books.id ? action.books : book,
      );
    }
    default:
      return state;
  }
};
export default books;
