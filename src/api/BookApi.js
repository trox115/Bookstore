import { handleResponse, handleError } from './Responses';

const baseUrl = 'https://antoniobookapi.herokuapp.com/books';

export function getBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function addBooks(book) {
  return fetch(`${baseUrl}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateBooks(book) {
  console.log('hey');
  return fetch(`${baseUrl}/${book.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBooks(book) {
  return fetch(`${baseUrl}/${book.id}`, { method: 'DELETE' })
    .then(' ')
    .catch(handleError);
}
