import * as BooksApi from '../api/BookApi';
export const create = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const remove = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filterChange = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export function loadBooksSuccess(books) {
  return { type: 'LOAD_BOOKS_SUCCESS', books };
}

export function loadBooks() {
  return function (dispatch) {
    return BooksApi.getBooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}
