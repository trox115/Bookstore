export const create = (book) => {
    return {
        type: 'CREATE_BOOK',
        book,
    };
}

export const remove = (book) => {
    return {
        type: 'REMOVE_BOOK'
        book
    };
}
