import * as BooksApi from '../api/BookApi';

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
export function createBooksSuccess(books) {
  return { type: 'CREATE_BOOKS_SUCCESS', books };
}

export function create(book) {
  return function (dispatch) {
    return BooksApi.addBooks(book)
      .then(books => {
        dispatch(createBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateBooksSuccess(books) {
  return { type: 'UPDATE_BOOKS_SUCCESS', books };
}

export function update(book) {
  console.log(BooksApi.updateBooks(book));

  return function (dispatch) {
    console.log(book);
    return BooksApi.updateBooks(book)
      .then(books => {
        dispatch(updateBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteBooksOptimistic(books) {
  return { type: 'DELETE_BOOKS_OPTIMISTIC', books };
}

export function deleteb(book) {
  return function (dispatch) {
    dispatch(deleteBooksOptimistic(book));
    return BooksApi.deleteBooks(book);
  };
}
