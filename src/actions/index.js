export const create = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const remove = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
