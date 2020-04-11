import { handleResponse, handleError } from './Responses';

const baseUrl = 'https://antoniobookapi.herokuapp.com/books';

export function getBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function addBooks(book) {
  console.log(book);
  return fetch(`${baseUrl}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}
