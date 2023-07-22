import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK_ITEM = 'bookstore/ADD_BOOK_ITEM';
const REMOVE_BOOK_ITEM = 'bookstore/REMOVE_BOOK_ITEM';

export const addBookItem = (payload) => ({
  type: ADD_BOOK_ITEM,
  payload,
});

export const removeBookItem = (payload) => ({
  type: REMOVE_BOOK_ITEM,
  payload,
});

const initialState = {
  books: [
    {
      item_id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Fiction',
    },
    {
      item_id: uuidv4(),
      title: 'Jane Eyre',
      author: 'Charlotte Bronte',
      category: 'Romance',
    },
    {
      item_id: uuidv4(),
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
      category: 'Literary Fiction',
    },
  ],
};

const booksSlice = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK_ITEM:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case REMOVE_BOOK_ITEM:
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== payload),
      };
    default:
      return state;
  }
};

export default booksSlice;
