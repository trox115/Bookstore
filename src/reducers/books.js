import arrayRemove from '../auxiliar/logic';

const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log(action);
      return [...state, action.book];
    case 'REMOVE_BOOK': {
      const index = state.findIndex(action.book);
      return arrayRemove(state, index);
    }
    default:
      return state;
  }
};
export default books;
