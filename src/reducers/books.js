import arrayRemove from '../auxiliar/logic';

const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK': {
      const index = state.filter(book => book !== action.book);

      return index;
    }
    default:
      return state;
  }
};
export default books;
