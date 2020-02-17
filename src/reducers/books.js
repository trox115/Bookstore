import arrayRemove from '../auxiliar/logic';


const books = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      let index = -1
      index = state.findIndex(action.book);
      return arrayRemove(state, index);
    default:
      return state;
  }
};
export default books;
